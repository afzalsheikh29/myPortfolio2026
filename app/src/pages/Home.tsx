import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, User, Folder, Mail } from "lucide-react";

export function Home() {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-dark-primary via-dark-primary to-dark-secondary/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                delay: 0,
                ease: [0.165, 0.84, 0.44, 1] as const,
              }}
              className="my-2"
            >
              <span className="inline-block px-6 py-3 bg-coral/10 text-coral text-base md:text-lg font-semibold uppercase tracking-wider rounded-full border border-coral/20 shadow-lg shadow-coral/10">
                Cloud & DevOps Engineer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                delay: 0.2,
                ease: [0.165, 0.84, 0.44, 1] as const,
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mb-6 leading-[1.1]"
            >
              Architecting
              <br />
              <span className="text-coral">Cloud-Native</span>
              <br />
              Infrastructure
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                delay: 0.4,
                ease: [0.165, 0.84, 0.44, 1] as const,
              }}
              className="text-base md:text-lg max-w-xl mb-8 text-white/70 leading-relaxed"
            >
              Results-oriented Cloud & DevOps Engineer architecting scalable
              infrastructure on AWS, Azure, and GCP. Expert in automating CI/CD
              pipelines, orchestrating containerized applications with
              Kubernetes, and managing Infrastructure as Code using Terraform.
              Proven track record of reducing cloud costs by 25% and optimizing
              deployment workflows with 99.9% uptime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.165, 0.84, 0.44, 1] as const,
              }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                to="/projects"
                className="btn-primary flex items-center gap-2"
              >
                <Folder className="w-4 h-4" />
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/about"
                className="btn-secondary flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                About Me
              </Link>

              <a
                href="/Afzal_khan-resume.pdf"
                download="Afzal_Khan_Resume.pdf"
                className="btn-secondary flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>

              <Link
                to="/contact"
                className="btn-secondary flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact
              </Link>
            </motion.div>

            {/* Stats - Equal spacing above and below the bordered section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                delay: 1,
                ease: [0.165, 0.84, 0.44, 1] as const,
              }}
              className="py-8 mt-12 mb-12 border-t border-b border-white/10"
            >
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center lg:text-center">
                  <p className="text-4xl md:text-5xl font-bold text-coral mb-2">
                    2+
                  </p>
                  <p className="text-white/60 text-xs md:text-sm uppercase tracking-wider">
                    Years
                    <br />
                    Experience
                  </p>
                </div>
                <div className="text-center lg:text-center">
                  <p className="text-4xl md:text-5xl font-bold text-coral mb-2">
                    15+
                  </p>
                  <p className="text-white/60 text-xs md:text-sm uppercase tracking-wider">
                    Projects
                    <br />
                    Delivered
                  </p>
                </div>
                <div className="text-center lg:text-center">
                  <p className="text-4xl md:text-5xl font-bold text-coral mb-2">
                    AWS
                  </p>
                  <p className="text-white/60 text-xs md:text-sm uppercase tracking-wider">
                    Certified
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image - FIXED PATH */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.4,
              ease: [0.165, 0.84, 0.44, 1] as const,
            }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative isolate">
              {/* Glow effect - Enhanced */}
              <div className="absolute -top-12 -left-8 -right-8 h-[120%] bg-[radial-gradient(ellipse_at_top,rgba(255,90,90,0.35),transparent_65%)] blur-3xl" />

              {/* Image container - Better contrast */}
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[36rem] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <img
                  src="/images/profile.png"
                  alt="Afzal Khan"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Fallback to jpg if png doesn't exist
                    e.currentTarget.src = "/images/profile.jpg";
                  }}
                />

                {/* Gradient overlay - Lighter */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/60 via-transparent to-transparent" />

                {/* Badge - Better design */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-dark-secondary/95 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-coral/20 to-coral/5 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-7 h-7 text-coral fill-current"
                        >
                          <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.863.279a2.01 2.01 0 0 1-.272.104.488.488 0 0 1-.119.016c-.104 0-.16-.08-.16-.247v-.439c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.842 4.842 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.415-.287-.806-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.16.152.454.304.87.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-base">
                          AWS Certified
                        </p>
                        <p className="text-white/60 text-sm">
                          Solutions Architect
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
