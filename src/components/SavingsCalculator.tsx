import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Fuel, Zap, TrendingUp } from "lucide-react";

export function SavingsCalculator() {
  const [weeklyKm, setWeeklyKm] = useState([150]);
  const [fuelPrice, setFuelPrice] = useState([2.10]);

  // Calculations
  const yearlyKm = weeklyKm[0] * 52;
  
  // Petrol bike assumptions: ~4L/100km average
  const petrolLitersPerYear = (yearlyKm / 100) * 4;
  const petrolCostPerYear = petrolLitersPerYear * fuelPrice[0];
  
  // LEKI assumptions: ~$2.33 per full charge, 160km range
  const lekiChargesPerYear = yearlyKm / 160;
  const lekiCostPerYear = lekiChargesPerYear * 2.33;
  
  const yearlySavings = petrolCostPerYear - lekiCostPerYear;
  const fiveYearSavings = yearlySavings * 5;

  return (
    <section id="savings" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Savings Calculator</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              See How Much You'll <span className="text-gradient">Save</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Compare running costs between a petrol bike and your LEKI.
            </p>
          </div>

          {/* Calculator card */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              {/* Sliders */}
              <div className="space-y-8 mb-12">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-medium">Weekly Distance</label>
                    <span className="text-lg font-bold text-primary">{weeklyKm[0]} km</span>
                  </div>
                  <Slider
                    value={weeklyKm}
                    onValueChange={setWeeklyKm}
                    max={500}
                    min={20}
                    step={10}
                    className="[&_[role=slider]]:bg-primary"
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>20 km</span>
                    <span>500 km</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-sm font-medium">Fuel Price (per litre)</label>
                    <span className="text-lg font-bold text-primary">${fuelPrice[0].toFixed(2)}</span>
                  </div>
                  <Slider
                    value={fuelPrice}
                    onValueChange={setFuelPrice}
                    max={3.00}
                    min={1.50}
                    step={0.05}
                    className="[&_[role=slider]]:bg-primary"
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>$1.50</span>
                    <span>$3.00</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Petrol cost */}
                <div className="p-6 rounded-xl bg-destructive/10 border border-destructive/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Fuel className="h-5 w-5 text-destructive" />
                    <span className="text-sm font-medium">Petrol Bike</span>
                  </div>
                  <div className="text-3xl font-bold text-destructive">
                    ${petrolCostPerYear.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </div>
                  <div className="text-sm text-muted-foreground">per year</div>
                </div>

                {/* LEKI cost */}
                <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">LEKI Electric</span>
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    ${lekiCostPerYear.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </div>
                  <div className="text-sm text-muted-foreground">per year</div>
                </div>

                {/* Savings */}
                <div className="p-6 rounded-xl bg-gradient-leki glow-primary">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-5 w-5 text-primary-foreground" />
                    <span className="text-sm font-medium text-primary-foreground">You Save</span>
                  </div>
                  <div className="text-3xl font-bold text-primary-foreground">
                    ${yearlySavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </div>
                  <div className="text-sm text-primary-foreground/80">per year</div>
                </div>
              </div>

              {/* 5 year projection */}
              <div className="text-center p-6 rounded-xl bg-secondary border border-border">
                <div className="text-muted-foreground mb-2">Over 5 years, you'll save approximately</div>
                <div className="text-5xl font-bold text-gradient mb-4">
                  ${fiveYearSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
                  Start Saving Today
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
