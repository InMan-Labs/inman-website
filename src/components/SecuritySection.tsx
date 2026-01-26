import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server, FileCheck, Users } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Enterprise Security Posture",
    description: "InMan is built with enterprise security requirements in mind. We follow industry best practices for data protection, access control, and secure development.",
  },
  {
    icon: Server,
    title: "Execution Isolation",
    description: "Every execution runs in isolated environments. Actions are sandboxed and cannot affect systems beyond their defined scope. No lateral movement, no unintended consequences.",
  },
  {
    icon: Eye,
    title: "Complete Transparency",
    description: "Every action, approval, and decision is logged with full context. Know exactly who did what, when, why, and what the outcome was. Perfect for compliance and post-incident review.",
  },
  {
    icon: Lock,
    title: "Role-Based Access Control",
    description: "Fine-grained permissions ensure that only authorized personnel can execute specific actions. Approvals can be required based on action risk level and environment.",
  },
  {
    icon: FileCheck,
    title: "Audit-Ready Logging",
    description: "InMan provides comprehensive audit logs that meet the requirements of SOC 2, ISO 27001, and other compliance frameworks. Export logs in standard formats for your GRC tools.",
  },
  {
    icon: Users,
    title: "Separation of Duties",
    description: "Enforce approval workflows that require sign-off from multiple parties. Prevent single points of failure in critical operations with mandatory review gates.",
  },
];

export const SecuritySection = () => {
  return (
    <section id="security" className="py-24 md:py-32 relative bg-card/30">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield size={16} className="text-primary" />
            <span className="text-sm text-primary">Enterprise Security</span>
          </div>
          <h2 className="section-heading mb-4">Security & Trust</h2>
          <p className="section-subheading mx-auto">
            Built for environments where security is not optional. InMan provides the controls 
            and visibility that regulated industries demand.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card-gradient border border-subtle rounded-xl p-6 shadow-card hover:border-primary/20 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <IconComponent size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-card-gradient border border-subtle rounded-xl p-8 max-w-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              "InMan is designed from the ground up for teams that cannot afford to compromise 
              on security. Every feature, every integration, every decision we make starts with 
              the question: <span className="text-foreground font-medium">how do we keep our customers' infrastructure safe?</span>"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
