import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, Building2, User, MessageSquare, ArrowRight } from "lucide-react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate inputs
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Create mailto link as fallback (will be replaced with edge function)
      const subject = encodeURIComponent(`Demo Request from ${formData.name} at ${formData.company}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message || "No additional message provided."}`
      );
      
      window.location.href = `mailto:abhishekasgola09@gmail.com?subject=${subject}&body=${body}`;
      
      toast({
        title: "Opening your email client...",
        description: "Please send the pre-filled email to complete your request.",
      });

      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading mb-4">Ready to See InMan in Action?</h2>
            <p className="section-subheading mb-8">
              Schedule a demo with our team to see how InMan can bring governed execution 
              to your infrastructure operations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageSquare size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Personalized Demo</h3>
                  <p className="text-sm text-muted-foreground">
                    See InMan in action with scenarios relevant to your infrastructure and use cases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <User size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Talk to an Expert</h3>
                  <p className="text-sm text-muted-foreground">
                    Discuss your specific challenges with our infrastructure operations specialists.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <ArrowRight size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">No Commitment</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore whether InMan is right for your team with no pressure or obligation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card-gradient border border-subtle rounded-xl p-8 shadow-card"
            >
              <h3 className="text-xl font-semibold mb-6">Request a Demo</h3>

              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User size={14} className="text-muted-foreground" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-muted/50 border-subtle"
                    maxLength={100}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail size={14} className="text-muted-foreground" />
                    Work Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-muted/50 border-subtle"
                    maxLength={255}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2">
                    <Building2 size={14} className="text-muted-foreground" />
                    Company *
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Acme Corporation"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-muted/50 border-subtle"
                    maxLength={100}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageSquare size={14} className="text-muted-foreground" />
                    How can we help? (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your infrastructure challenges or what you'd like to see in the demo..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-muted/50 border-subtle min-h-[100px] resize-none"
                    maxLength={1000}
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Demo"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to receive communications from Inferman Labs.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
