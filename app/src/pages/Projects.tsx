import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Folder, Star } from "lucide-react";

export function Projects() {
  const featuredProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  return (
    <section className="section-padding pt-32">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <span className="inline-block px-4 py-2 bg-coral/10 text-coral text-sm uppercase tracking-wider rounded-full mb-4">
            Portfolio
          </span>
          <h1 className="heading-xl text-white mb-4">Featured Projects</h1>
          <p className="body-lg max-w-2xl">
            A collection of production-grade cloud and DevOps projects
            showcasing real-world solutions to complex infrastructure
            challenges.
          </p>
        </AnimatedSection>

        {/* Featured Projects */}
        <div className="mb-20">
          <AnimatedSection delay={0.2} className="mb-8">
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-coral" />
              <h2 className="text-lg uppercase tracking-wider text-white/70">
                Featured
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <AnimatedSection delay={0.4} className="mb-8">
            <div className="flex items-center gap-3">
              <Folder className="w-5 h-5 text-coral" />
              <h2 className="text-lg uppercase tracking-wider text-white/70">
                More Projects
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + 2}
              />
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <AnimatedSection delay={0.8} className="mt-20">
          <div className="grid sm:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-dark-secondary border border-white/10 rounded-2xl p-6 text-center"
            >
              <p className="text-4xl font-bold text-coral mb-2">7</p>
              <p className="text-white/50 text-sm uppercase tracking-wider">
                Projects Completed
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-dark-secondary border border-white/10 rounded-2xl p-6 text-center"
            >
              <p className="text-4xl font-bold text-coral mb-2">99.99%</p>
              <p className="text-white/50 text-sm uppercase tracking-wider">
                Max Uptime Achieved
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="bg-dark-secondary border border-white/10 rounded-2xl p-6 text-center"
            >
              <p className="text-4xl font-bold text-coral mb-2">10K+</p>
              <p className="text-white/50 text-sm uppercase tracking-wider">
                Events/Hour Handled
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
