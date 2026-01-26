import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Shuffle, FileWarning, Zap, Eye } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Human Error Is Built In",
    description: "Infrastructure actions rely on manual SSH, copy-paste commands, and on-the-fly decisions. Even experienced engineers make mistakes—especially under pressure.",
  },
  {
    icon: Shuffle,
    title: "Execution Is Inconsistent",
    description: "The same task is handled differently across people, shifts, and sites, leading to unpredictable outcomes and longer resolution times.",
  },
  {
    icon: FileWarning,
    title: "Runbooks Don't Enforce Safety",
    description: "Runbooks describe what to do, but they don't control how actions are executed. Steps are skipped, adjusted, or improvised.",
  },
  {
    icon: Zap,
    title: "Automation Is Too Risky",
    description: "Traditional automation can run anything, but lacks guardrails, approvals, and real-time context—making teams hesitant to use it in production.",
  },
  {
    icon: Eye,
    title: "No Governance at Execution Time",
    description: "Approvals, policies, and audits are often missing at the moment actions run on live infrastructure—the highest-risk point.",
  },
];

export const ProblemSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % problems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="problem" className="py-24 md:py-32 relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">The Problem</h2>
          <p className="section-subheading mx-auto">
            Infrastructure operations are too often risky, inconsistent, and ungoverned. 
            Here's what teams face every day.
          </p>
        </motion.div>

        {/* Rotating Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-card-gradient border border-subtle rounded-xl p-8 md:p-10 shadow-card min-h-[280px] flex flex-col justify-center"
            >
              <div className="w-14 h-14 rounded-lg bg-destructive/10 flex items-center justify-center mb-6 mx-auto">
                {(() => {
                  const IconComponent = problems[activeIndex].icon;
                  return <IconComponent size={28} className="text-destructive" />;
                })()}
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
                {problems[activeIndex].title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed text-center">
                {problems[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicators */}
          <div className="flex gap-2 mt-6 justify-center">
            {problems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-primary"
                    : "w-4 bg-muted hover:bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
