import { Play } from "lucide-react";
import { useState } from "react";

const reels = [
  {
    id: 1,
    src: "/videos/reel-mineo.mp4",
    title: "City Commute",
  },
  {
    id: 2,
    src: "/videos/reel-drake.mp4",
    title: "Street Style",
  },
  {
    id: 3,
    src: "/videos/reel-icecube.mp4",
    title: "Urban Freedom",
  },
];

export function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-chrome">See LEKI</span>{" "}
            <span className="text-silver">In Action</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch real riders experience the future of urban commuting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
              onClick={() => setActiveVideo(activeVideo === reel.id ? null : reel.id)}
            >
              <video
                src={reel.src}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                loop
                playsInline
                autoPlay={activeVideo === reel.id}
                ref={(el) => {
                  if (el) {
                    if (activeVideo === reel.id) {
                      el.play();
                    } else {
                      el.pause();
                      el.currentTime = 0;
                    }
                  }
                }}
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-background/40 transition-opacity duration-300 ${activeVideo === reel.id ? 'opacity-0' : 'group-hover:opacity-50'}`} />
              
              {/* Play button */}
              {activeVideo !== reel.id && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-sparkle">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              )}
              
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <p className="text-sm font-medium text-primary">{reel.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
