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

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Main Featured Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
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
                <div className="w-14 h-14 rounded-lg bg-destructive/10 flex items-center justify-center mb-6">
                  {(() => {
                    const IconComponent = problems[activeIndex].icon;
                    return <IconComponent size={28} className="text-destructive" />;
                  })()}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  {problems[activeIndex].title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {problems[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicators */}
            <div className="flex gap-2 mt-6">
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

          {/* Mini Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {problems.map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-5 rounded-lg border transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-card border-primary/30 shadow-glow"
                      : "bg-card/50 border-subtle hover:bg-card hover:border-muted-foreground/20"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      index === activeIndex ? "bg-destructive/10" : "bg-muted"
                    }`}>
                      <IconComponent size={20} className={
                        index === activeIndex ? "text-destructive" : "text-muted-foreground"
                      } />
                    </div>
                    <div>
                      <h4 className={`font-medium mb-1 ${
                        index === activeIndex ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {problem.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
