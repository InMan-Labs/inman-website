import { motion } from "framer-motion";
import { CheckCircle, XCircle, Layers, Users, Eye, Workflow } from "lucide-react";

const whatItIs = [
  "Safely execute operational actions on servers and infrastructure",
  "Standardize how work is done across people, shifts, and sites",
  "Reduce human error without removing human control",
  "Maintain clear visibility into who did what, when, and why",
];

const whatItIsNot = [
  "An autonomous remediation system",
  "A generic automation or orchestration tool",
  "A replacement for engineers or existing infrastructure tools",
  "A CI/CD or provisioning platform",
];

const integrations = [
  "Monitoring and alerting systems",
  "ITSM and ticketing platforms",
  "Existing scripts and runbooks",
  "Cloud, VM, and on-prem environments",
];

export const ProductSection = () => {
  return (
    <section id="product" className="py-24 md:py-32 relative bg-card/30">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Product Overview</h2>
          <p className="section-subheading mx-auto">
            InMan is a governed execution platform that brings safety, control, and 
            auditability to infrastructure operations.
          </p>
        </motion.div>

        {/* What InMan Is */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-card-gradient border border-subtle rounded-xl p-8 md:p-10 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Workflow size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">What InMan Is</h3>
                <p className="text-muted-foreground">A governed execution platform for infrastructure operations</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-3xl">
              InMan turns runbooks into controlled, executable workflows with built-in approvals, 
              safety checks, and full auditability. InMan helps teams:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {whatItIs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-subtle"
                >
                  <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* What InMan Is Not + Where It Fits */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* What InMan Is Not */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card-gradient border border-subtle rounded-xl p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <XCircle size={24} className="text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">What InMan Is Not</h3>
            </div>

            <div className="space-y-3 mb-6">
              {whatItIsNot.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle size={18} className="text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground border-t border-subtle pt-4">
              It does not invent fixes or run unchecked scripts. Every action is intentional, 
              reviewed, and governed.
            </p>
          </motion.div>

          {/* Where InMan Fits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card-gradient border border-subtle rounded-xl p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Layers size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Where InMan Fits</h3>
            </div>

            <p className="text-muted-foreground mb-6">
              InMan sits between people and infrastructure, alongside your existing tools. It works with:
            </p>

            <div className="space-y-3 mb-6">
              {integrations.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground border-t border-subtle pt-4">
              InMan does not replace these systems—it adds a safe execution layer that governs 
              how infrastructure actions are carried out.
            </p>
          </motion.div>
        </div>

        {/* Visual Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-card-gradient border border-subtle rounded-xl p-8 md:p-12 shadow-card">
            <h3 className="text-xl font-semibold text-center mb-10">InMan in Your Stack</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {/* People */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center mb-3">
                  <Users size={32} className="text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">Engineers</span>
              </div>

              {/* Arrow */}
              <div className="text-muted-foreground text-2xl rotate-90 md:rotate-0">→</div>

              {/* InMan */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-xl bg-primary/10 border-2 border-primary flex items-center justify-center mb-3 shadow-glow">
                  <span className="text-primary font-bold text-lg">InMan</span>
                </div>
                <span className="text-sm text-primary font-medium">Governed Execution</span>
              </div>

              {/* Arrow */}
              <div className="text-muted-foreground text-2xl rotate-90 md:rotate-0">→</div>

              {/* Infrastructure */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center mb-3">
                  <Layers size={32} className="text-muted-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">Infrastructure</span>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-subtle">
                <Eye size={16} className="text-primary" />
                <span className="text-sm text-muted-foreground">Full visibility and control at every step</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
