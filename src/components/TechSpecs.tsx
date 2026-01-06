import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Zap, Battery, Gauge, Weight, Timer, Disc, Move } from "lucide-react";

const specs = {
  "5000W": {
    motor: {
      type: "Brushless Hub Motor",
      power: "5,000W Peak",
      torque: "200 Nm",
      cooling: "Air Cooled"
    },
    performance: {
      topSpeed: "100 km/h",
      acceleration: "0-50 in 4.5s",
      range: "100-110 km",
      modes: "Eco, Normal, Sport"
    },
    battery: {
      type: "Lithium-ion",
      capacity: "72V 45Ah",
      chargeTime: "4-6 hours",
      cycles: "1000+ cycles"
    },
    chassis: {
      weight: "105 kg",
      seatHeight: "780 mm",
      wheelbase: "1,350 mm",
      brakes: "Disc Front & Rear"
    }
  },
  "10000W": {
    motor: {
      type: "Brushless Hub Motor",
      power: "10,000W Peak",
      torque: "340 Nm",
      cooling: "Air Cooled"
    },
    performance: {
      topSpeed: "140 km/h",
      acceleration: "0-50 in 3.2s",
      range: "110-140 km",
      modes: "Eco, Normal, Sport"
    },
    battery: {
      type: "Lithium-ion",
      capacity: "72V 60Ah",
      chargeTime: "4-6 hours",
      cycles: "1000+ cycles"
    },
    chassis: {
      weight: "115 kg",
      seatHeight: "780 mm",
      wheelbase: "1,350 mm",
      brakes: "Disc Front & Rear"
    }
  }
};

export function TechSpecs() {
  const [activeModel, setActiveModel] = useState<"5000W" | "10000W">("10000W");
  const currentSpecs = specs[activeModel];

  return (
    <section id="specs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Technical Specifications</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-gradient">Numbers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real specs. No fluff. Just the facts you need.
          </p>
        </div>

        {/* Model selector */}
        <Tabs value={activeModel} onValueChange={(v) => setActiveModel(v as "5000W" | "10000W")} className="max-w-5xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="5000W" className="text-lg">E1 5000W</TabsTrigger>
            <TabsTrigger value="10000W" className="text-lg">E1 10000W</TabsTrigger>
          </TabsList>

          <TabsContent value={activeModel} className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Motor */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Motor</h3>
                </div>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Type</dt>
                    <dd className="font-medium">{currentSpecs.motor.type}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Power</dt>
                    <dd className="font-medium text-primary">{currentSpecs.motor.power}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Torque</dt>
                    <dd className="font-medium">{currentSpecs.motor.torque}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Cooling</dt>
                    <dd className="font-medium">{currentSpecs.motor.cooling}</dd>
                  </div>
                </dl>
              </div>

              {/* Performance */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Gauge className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Performance</h3>
                </div>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Top Speed</dt>
                    <dd className="font-medium text-primary">{currentSpecs.performance.topSpeed}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">0-50 km/h</dt>
                    <dd className="font-medium">{currentSpecs.performance.acceleration}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Range</dt>
                    <dd className="font-medium">{currentSpecs.performance.range}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Modes</dt>
                    <dd className="font-medium text-sm">{currentSpecs.performance.modes}</dd>
                  </div>
                </dl>
              </div>

              {/* Battery */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Battery className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Battery</h3>
                </div>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Type</dt>
                    <dd className="font-medium">{currentSpecs.battery.type}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Capacity</dt>
                    <dd className="font-medium">{currentSpecs.battery.capacity}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Charge Time</dt>
                    <dd className="font-medium text-primary">{currentSpecs.battery.chargeTime}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Lifespan</dt>
                    <dd className="font-medium">{currentSpecs.battery.cycles}</dd>
                  </div>
                </dl>
              </div>

              {/* Chassis */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Weight className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">Chassis</h3>
                </div>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Weight</dt>
                    <dd className="font-medium">{currentSpecs.chassis.weight}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Seat Height</dt>
                    <dd className="font-medium">{currentSpecs.chassis.seatHeight}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Wheelbase</dt>
                    <dd className="font-medium">{currentSpecs.chassis.wheelbase}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Brakes</dt>
                    <dd className="font-medium">{currentSpecs.chassis.brakes}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Download brochure CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            <FileText className="h-5 w-5" />
            Download Full Specifications PDF
          </Button>
        </div>
      </div>
    </section>
  );
}
