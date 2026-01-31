import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ExperienceCard } from "@/components/ExperienceCard";
import { experiences } from "@/data/experience";
import { GraduationCap, Building2 } from "lucide-react";

export function Experience() {
  return (
    <section className="section-padding pt-32">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <span className="inline-block px-4 py-2 bg-coral/10 text-coral text-sm uppercase tracking-wider rounded-full mb-4">
            Career Journey
          </span>
          <h1 className="heading-xl text-white mb-4">Professional Experience</h1>
          <p className="body-lg max-w-2xl">
            Building cloud infrastructure and DevOps solutions with measurable
            impact on deployment speed, reliability, and cost efficiency.
          </p>
        </AnimatedSection>

        {/* Work Experience */}
        <div className="mb-20">
          <AnimatedSection delay={0.2} className="mb-8">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-coral" />
              <h2 className="text-lg uppercase tracking-wider text-white/70">
                Work Experience
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Education */}
        <AnimatedSection delay={0.6}>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-5 h-5 text-coral" />
            <h2 className="text-lg uppercase tracking-wider text-white/70">
              Education
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.7,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="bg-dark-secondary border border-white/10 rounded-3xl p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-coral/10 rounded-xl text-coral shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-tight text-white">
                    B.Tech in Computer Science & Engineering
                  </h3>
                  <p className="text-coral text-lg">GLA University</p>
                </div>
              </div>
              <div className="text-white/50 text-sm">
                <p>2020 – 2024</p>
                <p>Mathura, India</p>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Impact Summary */}
        <AnimatedSection delay={0.8} className="mt-20">
          <div className="bg-gradient-to-r from-coral/10 to-coral/5 border border-coral/20 rounded-3xl p-8 md:p-12">
            <h3 className="heading-md text-white mb-8 text-center">
              Key Impact Metrics
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-coral mb-2">
                  50%
                </p>
                <p className="text-white/60 text-sm uppercase tracking-wider">
                  Faster Releases
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-coral mb-2">
                  25%
                </p>
                <p className="text-white/60 text-sm uppercase tracking-wider">
                  Cost Reduction
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-coral mb-2">
                  40%
                </p>
                <p className="text-white/60 text-sm uppercase tracking-wider">
                  Less Manual Work
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-coral mb-2">
                  99.9%
                </p>
                <p className="text-white/60 text-sm uppercase tracking-wider">
                  Uptime Maintained
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
