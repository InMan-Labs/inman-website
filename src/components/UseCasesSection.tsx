import { motion } from "framer-motion";
import { AlertOctagon, Settings, Clock, Shield, CheckSquare, History } from "lucide-react";

const useCases = [
  {
    icon: AlertOctagon,
    title: "Incident Response",
    description: "When incidents occur, teams need to act fast—but safely. InMan ensures that remediation steps are executed consistently, with proper approvals, and with a full audit trail. No more ad-hoc SSH sessions or improvised fixes.",
    features: [
      "Pre-approved runbooks ready for critical scenarios",
      "Real-time approval workflows for high-risk actions",
      "Complete audit log of every action taken",
      "Consistent execution across all responders",
    ],
  },
  {
    icon: Settings,
    title: "Routine Infrastructure Operations",
    description: "Day-to-day maintenance tasks—patching, restarts, configuration changes—are often where errors creep in. InMan standardizes these operations so they're done the same way, every time, with built-in safety checks.",
    features: [
      "Standardized procedures for common tasks",
      "Scheduled execution with policy enforcement",
      "Risk assessment before execution",
      "Reduced operational variance",
    ],
  },
];

export const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 md:py-32 relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wide uppercase mb-3 block">
            Use Cases
          </span>
          <h2 className="section-heading mb-4">Built for Critical Environments</h2>
          <p className="section-subheading mx-auto">
            InMan is designed for environments where safety and reliability are non-negotiable.
          </p>
        </motion.div>

        {/* Use Case Cards - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card-gradient border border-subtle rounded-xl p-8 shadow-card h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <IconComponent size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{useCase.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {useCase.description}
                </p>

                <div className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: Clock, label: "Faster Resolution", description: "Standardized execution reduces time to resolve" },
            { icon: Shield, label: "Reduced Risk", description: "Built-in checks prevent costly mistakes" },
            { icon: History, label: "Full Accountability", description: "Every action is logged and attributable" },
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card/50 border border-subtle"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon size={24} className="text-primary" />
              </div>
              <h4 className="font-medium mb-2">{benefit.label}</h4>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
