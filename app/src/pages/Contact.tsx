import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "khan29afzal@gmail.com",
      href: "mailto:khan29afzal@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/afzalkhan29",
      href: "https://linkedin.com/in/afzalkhan29",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/afzalsheikh29",
      href: "https://github.com/afzalsheikh29",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9193001060",
      href: "tel:+919193001060",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Noida, Uttar Pradesh, India",
      href: "#",
    },
  ];

  return (
    <section className="section-padding pt-32">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-coral/10 text-coral text-sm uppercase tracking-wider rounded-full mb-4">
            Let's Connect
          </span>
          <h1 className="heading-xl text-white mb-4">Get In Touch</h1>
          <p className="body-lg max-w-2xl mx-auto">
            Open to Cloud / DevOps Engineer opportunities. Let's discuss how I
            can help build reliable, scalable infrastructure for your
            organization.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.165, 0.84, 0.44, 1] as const,
            }}
            className="lg:col-span-2"
          >
            <div className="bg-dark-secondary border border-white/10 rounded-3xl p-6 md:p-8">
              <h2 className="text-xl font-semibold uppercase tracking-tight text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                      ease: [0.165, 0.84, 0.44, 1] as const,
                    }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200 group"
                  >
                    <div className="p-3 bg-coral/10 rounded-xl text-coral group-hover:bg-coral/20 transition-colors duration-200">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      <p className="text-white group-hover:text-coral transition-colors duration-200">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.165, 0.84, 0.44, 1] as const,
            }}
            className="lg:col-span-3"
          >
            <div className="bg-dark-secondary border border-white/10 rounded-3xl p-6 md:p-8">
              <h2 className="text-xl font-semibold uppercase tracking-tight text-white mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/50 text-sm uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-coral focus:ring-coral/20 rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-sm uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-coral focus:ring-coral/20 rounded-xl h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-sm uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="What's this about?"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-coral focus:ring-coral/20 rounded-xl h-12"
                  />
                </div>

                <div>
                  <label className="block text-white/50 text-sm uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={6}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-coral focus:ring-coral/20 rounded-xl resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
