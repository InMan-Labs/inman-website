import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Shield, Clock, Users } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Governed Execution",
    description: "Every action is intentional, reviewed, and auditable."
  },
  {
    icon: Clock,
    title: "Faster Resolution",
    description: "Standardized workflows reduce mean time to resolution."
  },
  {
    icon: Users,
    title: "Team Alignment",
    description: "Consistent execution across people, shifts, and sites."
  }
];

const Demo = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:abhishekasgola09@gmail.com?subject=Demo Request from ${formData.name} at ${formData.company}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0ARole: ${formData.role}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client",
      description: "Your demo request is being prepared. We'll be in touch soon.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-subtle">
        <div className="section-container">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">I</span>
              </div>
              <span className="font-semibold text-lg text-foreground">Inferman Labs</span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Request a Demo
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                See how InMan can help your team execute infrastructure operations with 
                safety, control, and full auditability. Schedule a personalized demo with our team.
              </p>

              {/* Benefits */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground">What you'll see:</h3>
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <benefit.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust indicators */}
              <div className="mt-10 pt-8 border-t border-subtle">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-primary" />
                  <span>No commitment required • 30-minute session • Personalized to your use case</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-card-gradient border border-subtle rounded-xl p-8 shadow-card">
                <h2 className="text-xl font-semibold mb-6">Get Started</h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="bg-muted/50 border-subtle"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="bg-muted/50 border-subtle"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        required
                        className="bg-muted/50 border-subtle"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Input
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="IT Manager"
                        className="bg-muted/50 border-subtle"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">What challenges are you facing?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your infrastructure operations and what you're looking to improve..."
                      rows={4}
                      className="bg-muted/50 border-subtle resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Request Demo
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. 
                    We'll never share your information with third parties.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demo;
