import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Award, Check, Shield, TrendingUp, Server } from "lucide-react";

export function Certifications() {
  const skills = [
    {
      icon: Server,
      title: "High Availability",
      description:
        "Designing fault-tolerant architectures with multi-AZ deployments, auto-scaling, and disaster recovery strategies",
    },
    {
      icon: Shield,
      title: "Security Best Practices",
      description:
        "Implementing defense-in-depth security with IAM, encryption, VPC isolation, and compliance frameworks",
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description:
        "Right-sizing resources, leveraging spot instances, and implementing intelligent auto-scaling for cost efficiency",
    },
    {
      icon: Award,
      title: "Production-Grade Design",
      description:
        "Making architectural decisions that balance performance, reliability, security, and cost for real-world workloads",
    },
  ];

  return (
    <section className="section-padding pt-32">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-coral/10 text-coral text-sm uppercase tracking-wider rounded-full mb-4">
            Credentials
          </span>
          <h1 className="heading-xl text-white mb-4">Certifications</h1>
          <p className="body-lg max-w-2xl mx-auto">
            Industry-recognized validation of cloud architecture expertise and
            best practices.
          </p>
        </AnimatedSection>

        {/* Main Certification Card */}
        <AnimatedSection delay={0.2} className="mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="relative bg-gradient-to-br from-dark-secondary to-dark-tertiary border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              {/* Badge */}
              <div className="lg:col-span-1 flex justify-center">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(255, 90, 101, 0.3)",
                      "0 0 40px rgba(255, 90, 101, 0.5)",
                      "0 0 20px rgba(255, 90, 101, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-48 h-48 md:w-56 md:h-56 rounded-3xl bg-gradient-to-br from-coral/20 to-coral/5 border border-coral/30 flex items-center justify-center p-6"
                >
                  <img
                    src="/images/aws.png"
                    alt="AWS Certified Solutions Architect - Associate Badge"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </div>

              {/* Details */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-coral" />
                  <span className="text-coral text-sm uppercase tracking-wider">
                    AWS Certification
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  AWS Certified Solutions Architect – Associate
                </h2>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-white/60">
                    <Check className="w-4 h-4 text-coral" />
                    <span className="text-sm">Issued: November 20, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Check className="w-4 h-4 text-coral" />
                    <span className="text-sm">Expires: November 20, 2028</span>
                  </div>
                </div>

                <p className="text-white/60 mb-6">
                  Credential ID: 1a4180ac04bb438786dc4b9797d89013
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Skills Validated */}
        <AnimatedSection delay={0.4}>
          <h3 className="heading-md text-white mb-8">Skills Validated</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + index * 0.1,
                  ease: [0.165, 0.84, 0.44, 1],
                }}
                whileHover={{ y: -4 }}
                className="bg-dark-secondary border border-white/10 rounded-2xl p-6 group hover:border-coral/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-coral/10 rounded-xl text-coral group-hover:bg-coral/20 transition-colors duration-300">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold uppercase tracking-tight mb-2">
                      {skill.title}
                    </h4>
                    <p className="text-white/50 text-sm">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
