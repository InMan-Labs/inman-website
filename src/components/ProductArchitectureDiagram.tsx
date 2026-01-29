import { motion } from "framer-motion";
import { User, Server, Cloud, Monitor, ArrowRight } from "lucide-react";

export const ProductArchitectureDiagram = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-16"
    >
      <div className="bg-card-gradient border border-subtle rounded-xl p-8 md:p-12 shadow-card">
        <h3 className="text-xl font-semibold text-center mb-10">Product Architecture Overview</h3>
        
        <div className="flex flex-col items-center gap-8">
          {/* Main layout with Engineer on left, centered stack */}
          <div className="relative w-full">
            {/* Engineer + Arrow positioned to the left of center */}
            <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-[280px] top-12">
              {/* Engineer */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-muted flex items-center justify-center mb-3">
                  <User size={32} className="text-muted-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground">Engineer</span>
                <span className="text-xs text-muted-foreground">Human Control</span>
              </div>

              {/* Arrow */}
              <ArrowRight size={24} className="text-muted-foreground" />
            </div>

            {/* Mobile Engineer */}
            <div className="flex md:hidden flex-col items-center mb-4">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-muted flex items-center justify-center mb-3">
                  <User size={32} className="text-muted-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground">Engineer</span>
                <span className="text-xs text-muted-foreground">Human Control</span>
              </div>
              <div className="text-muted-foreground mt-2">↓</div>
            </div>

            {/* Centered vertical stack: InMan Platform + Runner + Infrastructure */}
            <div className="flex flex-col items-center gap-6 mx-auto">
              {/* InMan Platform */}
              <div className="relative">
                {/* InMan Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-primary-foreground text-xs font-medium z-10">
                  InMan
                </div>
                
                {/* Main Platform Box */}
                <div className="bg-muted/20 border-2 border-primary/50 rounded-xl p-6 pt-8 w-[280px]">
                  <h4 className="text-lg font-semibold text-center mb-4">Governed Execution Platform</h4>
                  
                  <div className="flex flex-wrap justify-center gap-3">
                    {["Approvals", "Policies", "Audits", "Safety Checks"].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 bg-card border border-subtle rounded-md text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connection Line */}
              <div className="w-px h-6 bg-muted-foreground/30" />

              {/* Runner Section - same width as InMan box */}
              <div className="bg-muted/30 border border-subtle rounded-xl p-6 w-[280px]">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-primary" />
                    <span className="font-medium text-foreground">Runner</span>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    Least Privileged
                  </span>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Installed locally in your environment
                </p>
              </div>

              {/* Connection Lines to Infrastructure */}
              <div className="flex items-center justify-center gap-4 w-[280px]">
                <div className="flex-1 h-px bg-muted-foreground/30" />
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                <div className="flex-1 h-px bg-muted-foreground/30" />
              </div>

              {/* Infrastructure Icons */}
              <div className="flex items-center justify-center gap-8 md:gap-12">
                {[
                  { icon: Server, label: "Servers" },
                  { icon: Cloud, label: "Cloud" },
                  { icon: Monitor, label: "VMs" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-lg bg-muted/50 border border-subtle flex items-center justify-center mb-2">
                      <item.icon size={24} className="text-muted-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
