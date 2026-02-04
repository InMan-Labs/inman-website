import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-subtle bg-card/30">
      <div className="section-container">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">I</span>
              </div>
              <span className="font-semibold text-lg text-foreground">InMan Labs</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Governed execution for infrastructure operations. Safety, control, and auditability at every step.
            </p>
          </div>

          {/* Product Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/product" onClick={() => window.scrollTo(0, 0)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection("#problem")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  The Problem
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#product")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Product Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#roi-calculator")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  ROI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#use-cases")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Use Cases
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#security")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Security
                </button>
              </li>
            </ul>
          </div>
          </div>

          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
            <h4 className="font-semibold text-foreground mb-4">Get Started</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Ready to see how InMan can transform your infrastructure operations?
            </p>
            <Link 
              to="/demo" 
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Schedule a Demo →
            </Link>
          </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-6 border-t border-subtle flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} InMan Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
