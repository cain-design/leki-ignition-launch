import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SubscribeRequest {
  email: string;
  firstName?: string;
  lastName?: string;
  source?: string;
  listId?: string;
}

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const klaviyoApiKey = Deno.env.get("KLAVIYO_API_KEY");
    if (!klaviyoApiKey) {
      console.error("KLAVIYO_API_KEY not configured");
      throw new Error("Klaviyo API key not configured");
    }

    const { email, firstName, lastName, source, listId }: SubscribeRequest = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Subscribing ${email} to Klaviyo...`);

    // Create or update profile in Klaviyo
    const profileResponse = await fetch("https://a.klaviyo.com/api/profiles/", {
      method: "POST",
      headers: {
        "Authorization": `Klaviyo-API-Key ${klaviyoApiKey}`,
        "Content-Type": "application/json",
        "revision": "2024-02-15",
      },
      body: JSON.stringify({
        data: {
          type: "profile",
          attributes: {
            email,
            first_name: firstName || undefined,
            last_name: lastName || undefined,
            properties: {
              source: source || "website",
            },
          },
        },
      }),
    });

    let profileId: string;

    if (profileResponse.status === 201) {
      const profileData = await profileResponse.json();
      profileId = profileData.data.id;
      console.log(`Created new profile: ${profileId}`);
    } else if (profileResponse.status === 409) {
      // Profile already exists, get the existing profile ID from error
      const errorData = await profileResponse.json();
      profileId = errorData.errors?.[0]?.meta?.duplicate_profile_id;
      console.log(`Profile already exists: ${profileId}`);
    } else {
      const errorText = await profileResponse.text();
      console.error(`Klaviyo profile error: ${profileResponse.status} - ${errorText}`);
      throw new Error(`Failed to create profile: ${profileResponse.status}`);
    }

    // If a list ID is provided, subscribe to that list
    if (listId && profileId) {
      const subscribeResponse = await fetch(`https://a.klaviyo.com/api/lists/${listId}/relationships/profiles/`, {
        method: "POST",
        headers: {
          "Authorization": `Klaviyo-API-Key ${klaviyoApiKey}`,
          "Content-Type": "application/json",
          "revision": "2024-02-15",
        },
        body: JSON.stringify({
          data: [
            {
              type: "profile",
              id: profileId,
            },
          ],
        }),
      });

      if (!subscribeResponse.ok) {
        const errorText = await subscribeResponse.text();
        console.error(`Failed to add to list: ${subscribeResponse.status} - ${errorText}`);
      } else {
        console.log(`Added profile ${profileId} to list ${listId}`);
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: "Successfully subscribed" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error in klaviyo-subscribe function:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
