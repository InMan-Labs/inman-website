import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Shuffle, FileWarning, Zap, Eye } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Human Error Is Built In",
    shortTitle: "Human Error Is Built In",
    description: "Infrastructure actions rely on manual SSH, copy-paste commands, and on-the-fly decisions. Even experienced engineers make mistakes—especially under pressure.",
  },
  {
    icon: Shuffle,
    title: "Execution Is Inconsistent",
    shortTitle: "Execution Is Inconsistent",
    description: "The same task is handled differently across people, shifts, and sites, leading to unpredictable outcomes and longer resolution times.",
  },
  {
    icon: FileWarning,
    title: "Runbooks Don't Enforce",
    shortTitle: "Runbooks Don't Enforce...",
    description: "Runbooks describe what to do, but they don't control how actions are executed. Steps are skipped, adjusted, or improvised.",
  },
  {
    icon: Zap,
    title: "Automation Is Too Risky",
    shortTitle: "Automation Is Too Risky",
    description: "Traditional automation can run anything, but lacks guardrails, approvals, and real-time context—making teams hesitant to use it in production.",
  },
  {
    icon: Eye,
    title: "No Governance at Exec",
    shortTitle: "No Governance at Exec...",
    description: "Approvals, policies, and audits are often missing at the moment actions run on live infrastructure—the highest-risk point.",
  },
];

export const ProblemSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % problems.length);
    }, 4000);
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
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wide uppercase mb-3 block">
            The Problem
          </span>
          <h2 className="section-heading mb-4">
            The Problem with Infrastructure Operations Today
          </h2>
          <p className="section-subheading mx-auto">
            Manual processes and uncontrolled automation create risk at every step of 
            infrastructure management.
          </p>
        </motion.div>

        {/* Main Card Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-card-gradient border border-subtle rounded-xl p-8 md:p-10 shadow-card min-h-[240px] flex flex-col justify-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 mx-auto">
                {(() => {
                  const IconComponent = problems[activeIndex].icon;
                  return <IconComponent size={24} className="text-primary" />;
                })()}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">
                {problems[activeIndex].title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed text-center">
                {problems[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Horizontal Tab Selectors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-all duration-300 text-sm ${
                  index === activeIndex
                    ? "bg-card border-primary text-foreground"
                    : "bg-card/50 border-subtle text-muted-foreground hover:border-muted-foreground/50"
                }`}
              >
                <IconComponent size={16} />
                <span className="hidden sm:inline">{problem.shortTitle}</span>
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
