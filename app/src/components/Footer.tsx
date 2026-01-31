import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark-secondary border-t border-white/5 py-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] as const }}
          className="flex flex-col items-center text-center"
        >
          <p className="text-white/50 text-sm mb-4">
            Always building reliable cloud systems. Always learning.
          </p>
          
          <div className="flex items-center gap-6 mb-6">
            <a
              href="https://linkedin.com/in/afzalkhan29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-coral transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:khan29afzal@gmail.com"
              className="text-white/50 hover:text-coral transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+919193001060"
              className="text-white/50 hover:text-coral transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Afzal Khan. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
