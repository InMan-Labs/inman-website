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
      "Handoff-ready documentation",
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
          <h2 className="section-heading mb-4">Use Cases</h2>
          <p className="section-subheading mx-auto">
            InMan is designed for environments where safety and reliability are non-negotiable.
          </p>
        </motion.div>

        {/* Use Case Cards */}
        <div className="space-y-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card-gradient border border-subtle rounded-xl p-8 md:p-10 shadow-card"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <IconComponent size={28} className="text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold">{useCase.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {useCase.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-subtle"
                      >
                        <CheckSquare size={20} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
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
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: Clock, label: "Faster Resolution", description: "Standardized execution reduces time to resolve" },
            { icon: Shield, label: "Reduced Risk", description: "Built-in checks prevent costly mistakes" },
            { icon: History, label: "Full Accountability", description: "Every action is logged and attributable" },
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-card/50 border border-subtle"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <benefit.icon size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1">{benefit.label}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
