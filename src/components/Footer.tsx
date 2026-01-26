import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-subtle">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">I</span>
            </div>
            <span className="font-semibold text-lg text-foreground">Inferman Labs</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#problem" className="hover:text-foreground transition-colors">Problem</a>
            <a href="#product" className="hover:text-foreground transition-colors">Product</a>
            <a href="#use-cases" className="hover:text-foreground transition-colors">Use Cases</a>
            <a href="#security" className="hover:text-foreground transition-colors">Security</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Inferman Labs. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
