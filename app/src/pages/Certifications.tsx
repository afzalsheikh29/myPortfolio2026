import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Award, Check, ExternalLink, Shield, TrendingUp, Server } from "lucide-react";

export function Certifications() {
  const skills = [
    {
      icon: Server,
      title: "High Availability",
      description: "Designing fault-tolerant architectures with multi-AZ deployments, auto-scaling, and disaster recovery strategies",
    },
    {
      icon: Shield,
      title: "Security Best Practices",
      description: "Implementing defense-in-depth security with IAM, encryption, VPC isolation, and compliance frameworks",
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Right-sizing resources, leveraging spot instances, and implementing intelligent auto-scaling for cost efficiency",
    },
    {
      icon: Award,
      title: "Production-Grade Design",
      description: "Making architectural decisions that balance performance, reliability, security, and cost for real-world workloads",
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
                  className="w-48 h-48 md:w-56 md:h-56 rounded-3xl bg-gradient-to-br from-coral/20 to-coral/5 border border-coral/30 flex items-center justify-center"
                >
                  <div className="text-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-20 h-20 md:w-24 md:h-24 text-coral fill-current mx-auto mb-4"
                    >
                      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.863.279a2.01 2.01 0 0 1-.272.104.488.488 0 0 1-.119.016c-.104 0-.16-.08-.16-.247v-.439c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.842 4.842 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.415-.287-.806-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.16.152.454.304.87.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"/>
                    </svg>
                    <p className="text-coral font-bold text-lg">AWS</p>
                  </div>
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

                <a
                  href="https://aws.amazon.com/verification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify Credential
                </a>
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
