import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Clock, DollarSign, TrendingUp } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export const ROICalculatorSection = () => {
  const [incidents, setIncidents] = useState(500);
  const [mttr, setMttr] = useState(8);
  const [costPerHour, setCostPerHour] = useState(50);

  const calculations = useMemo(() => {
    // Potential Time Saved (hours/year) = (MTTR * 0.5) * incidents * 12
    const timeSaved = (mttr * 0.5) * incidents * 12;
    
    // Potential Cost Savings ($/year) = timeSaved * costPerHour
    const costSavings = timeSaved * costPerHour;

    return {
      timeSaved,
      costSavings,
    };
  }, [incidents, mttr, costPerHour]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toFixed(0);
  };

  const formatCurrency = (num: number) => {
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `$${(num / 1000).toFixed(0)}K`;
    }
    return `$${num.toFixed(0)}`;
  };

  return (
    <section id="roi-calculator" className="py-24 md:py-32 relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wide uppercase mb-3 block">
            ROI Calculator
          </span>
          <h2 className="section-heading mb-4">See Your Potential Savings</h2>
          <p className="section-subheading mx-auto">
            Calculate how much you could save by standardizing infrastructure operations with InMan.
          </p>
        </motion.div>

        {/* Calculator Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-card-gradient border border-subtle rounded-xl p-8 md:p-10 shadow-card">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Input Section */}
              <div className="space-y-8">
                <h3 className="text-lg font-semibold text-foreground">Your Current Operations</h3>
                
                {/* Average Routine Incidents per Month */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Average Routine Incidents per Month</span>
                    <span className="text-primary font-semibold">{incidents.toLocaleString()}</span>
                  </div>
                  <Slider
                    value={[incidents]}
                    onValueChange={(value) => setIncidents(value[0])}
                    min={100}
                    max={2000}
                    step={50}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>100</span>
                    <span>2,000</span>
                  </div>
                </div>

                {/* Current MTTR */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Current MTTR (Mean Time To Resolve)</span>
                    <span className="text-primary font-semibold">{mttr} hrs</span>
                  </div>
                  <Slider
                    value={[mttr]}
                    onValueChange={(value) => setMttr(value[0])}
                    min={4}
                    max={24}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>4 hrs</span>
                    <span>24 hrs</span>
                  </div>
                </div>

                {/* Average Cost per Incident per Hour */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Average Cost per Incident per Hour</span>
                    <span className="text-primary font-semibold">${costPerHour}</span>
                  </div>
                  <Slider
                    value={[costPerHour]}
                    onValueChange={(value) => setCostPerHour(value[0])}
                    min={25}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$25</span>
                    <span>$100</span>
                  </div>
                </div>
              </div>

              {/* Output Section */}
              <div className="space-y-6">
                {/* Potential Time Saved */}
                <div className="bg-muted/30 border border-subtle rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock size={20} className="text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Potential Time Saved</span>
                      <p className="text-xs text-muted-foreground/70">hours per year</p>
                    </div>
                  </div>
                  <p className="text-4xl md:text-5xl font-bold text-foreground">
                    {formatNumber(calculations.timeSaved)} <span className="text-xl font-normal text-muted-foreground">hours/year</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    Based on 50% MTTR reduction with governed execution
                  </p>
                </div>

                {/* Potential Cost Savings */}
                <div className="bg-muted/30 border border-subtle rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <DollarSign size={20} className="text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Potential Cost Savings</span>
                      <p className="text-xs text-muted-foreground/70">dollars per year</p>
                    </div>
                  </div>
                  <p className="text-4xl md:text-5xl font-bold text-primary">
                    {formatCurrency(calculations.costSavings)}<span className="text-xl font-normal text-muted-foreground">/year</span>
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-sm text-primary">
                    <TrendingUp size={16} />
                    <span>Projected annual savings with InMan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
