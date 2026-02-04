import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  FileText, 
  Code, 
  Shield, 
  ClipboardCheck, 
  UserCheck, 
  Play,
  ArrowDown,
  CheckCircle
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import dashboardImage from "@/assets/inman-dashboard.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-hero-gradient">
        <div className="section-container">
          <motion.div 
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              What is InMan?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              InMan is a governed execution platform that converts operational runbooks into 
              safe, approved, and auditable actions — giving your team the confidence to 
              resolve incidents without risk.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-16"
          >
            <Button 
              onClick={() => scrollToSection("section-1")}
              variant="hero"
              className="px-8 py-6 text-base"
            >
              See How It Works
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
              {/* Browser Chrome */}
              <div className="bg-secondary px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-muted rounded px-4 py-1 text-xs text-muted-foreground border border-border">
                    app.inman.io/dashboard
                  </div>
                </div>
              </div>
              <img 
                src={dashboardImage} 
                alt="InMan Dashboard - Health Dashboard showing incident analysis, runbook performance, and governance metrics"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1 - Incident Created */}
      <section id="section-1" className="py-24 lg:py-32 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">1</span>
                Step One
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                An Incident Is Created
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                When an issue occurs in production, your monitoring or alerting tools detect it immediately. 
                An ITSM ticket is created for the incident, triggering the resolution workflow.
              </p>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">Works with existing monitoring & ITSM tools</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="w-48 h-48 bg-card-gradient rounded-2xl flex items-center justify-center border border-border shadow-glow">
                <AlertTriangle className="w-20 h-20 text-primary" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Runbook Selected */}
      <section className="py-24 lg:py-32 bg-card/30">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center order-2 lg:order-1"
            >
              <div className="w-48 h-48 bg-card-gradient rounded-2xl flex items-center justify-center border border-border shadow-glow">
                <FileText className="w-20 h-20 text-primary" />
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">2</span>
                Step Two
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Right Runbook Is Selected
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Incidents often follow known, repeatable patterns. InMan identifies and selects 
                the most relevant runbook for the situation — leveraging your team's proven 
                operational knowledge to guide the response.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - Context-Aware Scripts */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">3</span>
                Step Three
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Runbooks Become Context-Aware Scripts
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                InMan gathers real-time system context — environment details, server state, 
                and historical data — then converts the runbook into a script tailored 
                specifically for that machine.
              </p>
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-primary font-medium">
                  No generic scripts. Context matters.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="w-48 h-48 bg-card-gradient rounded-2xl flex items-center justify-center border border-border shadow-glow">
                <Code className="w-20 h-20 text-primary" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4 - Safety & Risk Analysis */}
      <section className="py-24 lg:py-32 bg-card/30">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center order-2 lg:order-1"
            >
              <div className="w-48 h-48 bg-card-gradient rounded-2xl flex items-center justify-center border border-border shadow-glow">
                <Shield className="w-20 h-20 text-primary" />
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">4</span>
                Step Four
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Safety and Risk Analysis
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Before execution, the generated script is thoroughly analyzed. Security checks 
                are performed, blast radius is evaluated, and operational impact is assessed.
              </p>
              <ul className="space-y-3">
                {["What will change", "What systems are affected", "Expected risk level"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5 - Governance & Compliance */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">5</span>
                Step Five
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Governance and Policy Validation
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The script is checked against your company's governance policies. 
                Non-compliant scripts are blocked or flagged before they can run.
              </p>
              <ul className="space-y-3">
                {["Least privilege enforcement", "Environment restrictions", "Approval requirements"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="w-48 h-48 bg-card-gradient rounded-2xl flex items-center justify-center border border-border shadow-glow">
                <ClipboardCheck className="w-20 h-20 text-primary" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6 - Human Review */}
      <section className="py-24 lg:py-32 bg-card/30">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center order-2 lg:order-1"
            >
              <div className="w-48 h-48 bg-card-gradient rounded-2xl flex items-center justify-center border border-border shadow-glow">
                <UserCheck className="w-20 h-20 text-primary" />
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">6</span>
                Step Six
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Human Review and Approval
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The script and analysis are sent to the user application. The incident is 
                assigned to the appropriate engineer who can approve execution or add 
                extra context to regenerate the script.
              </p>
              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-primary font-medium">
                  Humans stay in control. No blind automation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7 - Safe Execution */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <span className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs">7</span>
                Step Seven
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Safe Execution Through an Isolated Runner
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Once approved, the script executes through a secure, isolated runner using 
                minimal privileges. Every action is fully logged and auditable.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Predictable", sublabel: "Execution" },
                  { label: "Reduced", sublabel: "Risk" },
                  { label: "Faster", sublabel: "Resolution" }
                ].map((item) => (
                  <div key={item.label} className="text-center p-4 bg-card rounded-lg border border-border">
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.sublabel}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="w-48 h-48 bg-card-gradient rounded-2xl flex items-center justify-center border border-border shadow-glow">
                <Play className="w-20 h-20 text-primary" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-hero-gradient">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to See InMan in Action?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a demo to learn how InMan can bring safety, control, and 
              auditability to your infrastructure operations.
            </p>
            <Link to="/demo" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="hero" className="px-8 py-6 text-base">
                Talk to Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductPage;
