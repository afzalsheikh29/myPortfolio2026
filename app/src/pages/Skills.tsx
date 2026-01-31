import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SkillCard } from "@/components/SkillCard";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section className="section-padding pt-32">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-coral/10 text-coral text-sm uppercase tracking-wider rounded-full mb-4">
            Technical Expertise
          </span>
          <h1 className="heading-xl text-white mb-4">Skills & Technologies</h1>
          <p className="body-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building, deploying, and managing
            cloud-native infrastructure and applications.
          </p>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Summary Stats */}
        <AnimatedSection delay={0.8} className="mt-20">
          <div className="bg-gradient-to-r from-coral/10 to-coral/5 border border-coral/20 rounded-3xl p-8 md:p-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-coral mb-2">3</p>
                <p className="text-white/60 text-sm uppercase tracking-wider">
                  Cloud Platforms
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-coral mb-2">6</p>
                <p className="text-white/60 text-sm uppercase tracking-wider">
                  Container Tools
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-coral mb-2">4</p>
                <p className="text-white/60 text-sm uppercase tracking-wider">
                  CI/CD Tools
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-coral mb-2">6</p>
                <p className="text-white/60 text-sm uppercase tracking-wider">
                  Databases
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
