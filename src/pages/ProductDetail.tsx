import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fetchProductByHandle, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { 
  ShoppingCart, 
  Zap, 
  Loader2, 
  ChevronLeft, 
  Check, 
  Battery, 
  Gauge, 
  Shield,
  Minus,
  Plus
} from "lucide-react";
import { toast } from "sonner";

export default function ProductDetail() {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct['node'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    async function loadProduct() {
      if (!handle) return;
      try {
        const data = await fetchProductByHandle(handle);
        setProduct(data);
      } catch (error) {
        console.error("Failed to load product:", error);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [handle]);

  const handleAddToCart = () => {
    if (!product) return;
    const variant = product.variants.edges[selectedVariantIndex]?.node;
    if (!variant) return;

    addItem({
      product: { node: product },
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity,
      selectedOptions: variant.selectedOptions || [],
    });

    toast.success("Added to cart!", {
      description: `${product.title} × ${quantity}`,
      position: "top-center",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 flex items-center justify-center py-32">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center py-32">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Link to="/">
              <Button variant="outline">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const selectedVariant = product.variants.edges[selectedVariantIndex]?.node;
  const images = product.images.edges;
  const price = parseFloat(selectedVariant?.price.amount || product.priceRange.minVariantPrice.amount);
  const is10000W = product.title.includes("10000W");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Bikes
            </Link>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary border border-border">
                {images[selectedImageIndex] ? (
                  <img
                    src={images[selectedImageIndex].node.url}
                    alt={images[selectedImageIndex].node.altText || product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Zap className="h-24 w-24 text-primary/30" />
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImageIndex === index 
                          ? 'border-primary' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <img
                        src={image.node.url}
                        alt={image.node.altText || `${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary text-primary-foreground">ADR Approved</Badge>
                <Badge variant="secondary">Learner Approved</Badge>
                {selectedVariant?.availableForSale && (
                  <Badge variant="outline" className="text-primary border-primary">
                    <Check className="mr-1 h-3 w-3" /> In Stock
                  </Badge>
                )}
              </div>

              {/* Title & Price */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.title}</h1>
                <div className="text-3xl font-bold text-primary">
                  ${price.toLocaleString()} <span className="text-lg text-muted-foreground font-normal">AUD</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {product.description || (is10000W 
                  ? "The ultimate electric motorbike. With 10kW of raw power, 110km/h top speed, and 160km+ range, the E1 10000W is built for riders who demand the best. ADR approved, road legal, and learner friendly."
                  : "Your perfect entry into electric riding. The E1 5000W delivers smooth, silent power with 90km/h top speed and 160km+ range. ADR approved, road legal, and designed for everyday adventures."
                )}
              </p>

              {/* Key Specs */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
                <div className="text-center">
                  <Gauge className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="font-bold">{is10000W ? "110km/h" : "90km/h"}</div>
                  <div className="text-sm text-muted-foreground">Top Speed</div>
                </div>
                <div className="text-center">
                  <Battery className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="font-bold">160km+</div>
                  <div className="text-sm text-muted-foreground">Range</div>
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="font-bold">2 Year</div>
                  <div className="text-sm text-muted-foreground">Warranty</div>
                </div>
              </div>

              {/* Variant Selection */}
              {product.options.length > 0 && product.options[0].values.length > 1 && (
                <div className="space-y-4">
                  {product.options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <label className="text-sm font-medium mb-3 block">{option.name}</label>
                      <div className="flex flex-wrap gap-2">
                        {option.values.map((value, valueIndex) => {
                          const variantIndex = product.variants.edges.findIndex(
                            v => v.node.selectedOptions.some(
                              so => so.name === option.name && so.value === value
                            )
                          );
                          const variant = product.variants.edges[variantIndex]?.node;
                          const isSelected = selectedVariantIndex === variantIndex;

                          return (
                            <button
                              key={value}
                              onClick={() => setSelectedVariantIndex(variantIndex >= 0 ? variantIndex : valueIndex)}
                              disabled={variant && !variant.availableForSale}
                              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                                isSelected
                                  ? 'bg-primary text-primary-foreground border-primary'
                                  : variant?.availableForSale === false
                                  ? 'border-border text-muted-foreground opacity-50 cursor-not-allowed'
                                  : 'border-border hover:border-primary/50'
                              }`}
                            >
                              {value}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Quantity */}
              <div>
                <label className="text-sm font-medium mb-3 block">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium text-lg">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4 pt-4">
                <Button
                  size="lg"
                  className="flex-1 text-lg py-6 bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
                  onClick={handleAddToCart}
                  disabled={!selectedVariant?.availableForSale}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart - ${(price * quantity).toLocaleString()}
                </Button>
              </div>

              {/* Trust signals */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check className="h-5 w-5 text-primary" />
                  Free shipping Australia-wide
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check className="h-5 w-5 text-primary" />
                  Road legal & registered
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check className="h-5 w-5 text-primary" />
                  Charge at home
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check className="h-5 w-5 text-primary" />
                  Finance available
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
