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
  CheckCircle,
  Monitor
} from "lucide-react";
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
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="font-semibold text-lg text-slate-900">Inferman Labs</span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                Home
              </Link>
              <Link to="/product" className="text-sm text-blue-600 font-medium">
                Product
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link to="/demo" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Talk to Us
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              What is InMan?
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
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
            className="flex justify-center gap-4 mb-16"
          >
            <Button 
              onClick={() => scrollToSection("section-1")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base"
            >
              See How It Works
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Link to="/demo" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-base">
                Talk to Us
              </Button>
            </Link>
          </motion.div>

          {/* Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Browser Chrome */}
              <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white rounded px-4 py-1 text-xs text-slate-500 border border-slate-200">
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
      <section id="section-1" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">1</span>
                Step One
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                An Incident Is Created
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                When an issue occurs in production, your monitoring or alerting tools detect it immediately. 
                An ITSM ticket is created for the incident, triggering the resolution workflow.
              </p>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                <span className="text-sm text-slate-600">Works with existing monitoring & ITSM tools</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="w-48 h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center border border-blue-200">
                <AlertTriangle className="w-20 h-20 text-blue-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Runbook Selected */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center order-2 lg:order-1"
            >
              <div className="w-48 h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center border border-blue-200">
                <FileText className="w-20 h-20 text-blue-600" />
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">2</span>
                Step Two
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Right Runbook Is Selected
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Incidents often follow known, repeatable patterns. InMan identifies and selects 
                the most relevant runbook for the situation — leveraging your team's proven 
                operational knowledge to guide the response.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - Context-Aware Scripts */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">3</span>
                Step Three
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Runbooks Become Context-Aware Scripts
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                InMan gathers real-time system context — environment details, server state, 
                and historical data — then converts the runbook into a script tailored 
                specifically for that machine.
              </p>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800 font-medium">
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
              <div className="w-48 h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center border border-blue-200">
                <Code className="w-20 h-20 text-blue-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4 - Safety & Risk Analysis */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center order-2 lg:order-1"
            >
              <div className="w-48 h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center border border-blue-200">
                <Shield className="w-20 h-20 text-blue-600" />
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">4</span>
                Step Four
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Safety and Risk Analysis
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Before execution, the generated script is thoroughly analyzed. Security checks 
                are performed, blast radius is evaluated, and operational impact is assessed.
              </p>
              <ul className="space-y-3">
                {["What will change", "What systems are affected", "Expected risk level"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5 - Governance & Compliance */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">5</span>
                Step Five
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Governance and Policy Validation
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                The script is checked against your company's governance policies. 
                Non-compliant scripts are blocked or flagged before they can run.
              </p>
              <ul className="space-y-3">
                {["Least privilege enforcement", "Environment restrictions", "Approval requirements"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
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
              <div className="w-48 h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center border border-blue-200">
                <ClipboardCheck className="w-20 h-20 text-blue-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6 - Human Review */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center order-2 lg:order-1"
            >
              <div className="w-48 h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center border border-blue-200">
                <UserCheck className="w-20 h-20 text-blue-600" />
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">6</span>
                Step Six
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Human Review and Approval
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                The script and analysis are sent to the user application. The incident is 
                assigned to the appropriate engineer who can approve execution or add 
                extra context to regenerate the script.
              </p>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800 font-medium">
                  Humans stay in control. No blind automation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7 - Safe Execution */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">7</span>
                Step Seven
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Safe Execution Through an Isolated Runner
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Once approved, the script executes through a secure, isolated runner using 
                minimal privileges. Every action is fully logged and auditable.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Predictable", sublabel: "Execution" },
                  { label: "Reduced", sublabel: "Risk" },
                  { label: "Faster", sublabel: "Resolution" }
                ].map((item) => (
                  <div key={item.label} className="text-center p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-semibold text-slate-900">{item.label}</p>
                    <p className="text-sm text-slate-500">{item.sublabel}</p>
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
              <div className="w-48 h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center border border-blue-200">
                <Play className="w-20 h-20 text-blue-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ready to See InMan in Action?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Schedule a demo to learn how InMan can bring safety, control, and 
              auditability to your infrastructure operations.
            </p>
            <Link to="/demo" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base">
                Talk to Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">I</span>
                </div>
                <span className="font-semibold text-lg text-slate-900">Inferman Labs</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Governed execution for infrastructure operations. Safety, control, and auditability at every step.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/product" onClick={() => window.scrollTo(0, 0)} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/demo" onClick={() => window.scrollTo(0, 0)} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                    Request a Demo
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get Started */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Get Started</h4>
              <p className="text-sm text-slate-600 mb-3">
                Ready to see how InMan can transform your infrastructure operations?
              </p>
              <Link 
                to="/demo" 
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 transition-colors font-medium"
              >
                Schedule a Demo →
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Inferman Labs. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;
