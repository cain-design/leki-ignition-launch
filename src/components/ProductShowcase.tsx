import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShopifyProduct, fetchProducts } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { ShoppingCart, Zap, Loader2 } from "lucide-react";
import { toast } from "sonner";

export function ProductShowcase() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    async function loadProducts() {
      try {
        // Only fetch the main bike products, not spare parts
        const data = await fetchProducts(10, "title:LEKI Electric Motorbike");
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  const handleAddToCart = (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;

    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });

    toast.success("Added to cart!", {
      description: product.node.title,
      position: "top-center",
    });
  };

  if (loading) {
    return (
      <section id="bikes" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  // Filter to show only the main bikes (not spare parts, not preorder for hero)
  const mainBikes = products.filter(p => 
    !p.node.title.includes("Preorder") && 
    !p.node.title.includes("Test Ride")
  );

  const preorderBike = products.find(p => p.node.title.includes("Preorder"));

  return (
    <section id="bikes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">The Lineup</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient">LEKI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Two powerful options. Same incredible ride. Both road legal and learner approved.
          </p>
        </div>

        {/* Main bikes grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {mainBikes.map((product, index) => (
            <ProductCard 
              key={product.node.id} 
              product={product} 
              onAddToCart={handleAddToCart}
              featured={index === 1}
            />
          ))}
        </div>

        {/* Preorder banner */}
        {preorderBike && (
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-secondary via-secondary/80 to-secondary p-8 md:p-12 border border-border">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <Badge className="bg-primary text-primary-foreground mb-3">Coming 2026</Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{preorderBike.node.title}</h3>
                <p className="text-muted-foreground">Be the first to ride the next generation.</p>
              </div>
              <Button 
                size="lg" 
                onClick={() => handleAddToCart(preorderBike)}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Zap className="mr-2 h-5 w-5" />
                Preorder Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

interface ProductCardProps {
  product: ShopifyProduct;
  onAddToCart: (product: ShopifyProduct) => void;
  featured?: boolean;
}

function ProductCard({ product, onAddToCart, featured }: ProductCardProps) {
  const price = parseFloat(product.node.priceRange.minVariantPrice.amount);
  const imageUrl = product.node.images.edges[0]?.node.url;
  const is10000W = product.node.title.includes("10000W");

  return (
    <Card className={`group relative overflow-hidden bg-card border-border transition-all duration-300 hover:border-primary/50 ${featured ? 'ring-2 ring-primary' : ''}`}>
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
        </div>
      )}
      
      <CardContent className="p-6">
        {/* Product image */}
        <div className="relative aspect-[4/3] mb-6 rounded-lg overflow-hidden bg-secondary">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product.node.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Zap className="h-16 w-16 text-primary/30" />
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-1">{product.node.title}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2">
              {product.node.description || (is10000W 
                ? "The beast. Maximum power for experienced riders who want it all."
                : "The perfect entry. Powerful, efficient, and learner approved."
              )}
            </p>
          </div>

          {/* Specs */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{is10000W ? "10kW Motor" : "5kW Motor"}</Badge>
            <Badge variant="secondary">{is10000W ? "110km/h" : "90km/h"}</Badge>
            <Badge variant="secondary">Learner Approved</Badge>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div>
              <div className="text-sm text-muted-foreground">From</div>
              <div className="text-2xl font-bold text-primary">
                ${price.toLocaleString()}
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => onAddToCart(product)}
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Configure
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
