import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Cloud, Server, Shield, TrendingUp } from "lucide-react";

export function About() {
  const paragraphs = [
    "I'm a Cloud & DevOps Engineer with 1.5+ years of hands-on experience architecting and deploying scalable infrastructure on AWS, Azure, and GCP. My journey in cloud engineering started with a deep fascination for automation and has evolved into a passion for building production-ready systems that are reliable, secure, and cost-effective.",
    "My core expertise lies in AWS services (EC2, S3, RDS, Lambda, IAM, VPC, CloudWatch), where I've designed and implemented solutions ranging from traditional server-based architectures to modern serverless systems. I'm equally comfortable with containerization technologies like Docker and Kubernetes, having orchestrated microservices deployments with auto-scaling and high-availability configurations.",
    "Infrastructure as Code is at the heart of my workflow. I use Terraform to provision and manage cloud resources, ensuring consistency across environments and enabling rapid infrastructure changes through version-controlled configurations. This approach has helped me reduce deployment times by 50% and eliminate configuration drift.",
    "Cost optimization is always a priority. By implementing Auto Scaling Groups, spot instances, and right-sizing resources, I've achieved a 25% reduction in cloud infrastructure costs while maintaining 99.9% uptime. I believe that good architecture isn't just about performance—it's about delivering value efficiently.",
    "My automation mindset extends beyond infrastructure. I've built CI/CD pipelines using Jenkins, GitHub Actions, and GitLab CI that enable zero-downtime deployments. I've also developed Python and Bash scripts, along with n8n workflows, to automate operational tasks and reduce manual overhead by 40%.",
    "I'm committed to continuous learning and improvement. The cloud landscape evolves rapidly, and I stay current with new services, best practices, and emerging patterns. Whether it's exploring AI-powered automation or refining security postures, I'm always looking for ways to deliver better solutions.",
  ];

  const highlights = [
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "AWS, Azure, GCP expertise with serverless and containerized architectures",
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Terraform, AWS SAM, CloudFormation for reproducible infrastructure",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "DevSecOps practices with security embedded in every layer",
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "25% cost reduction through smart resource management",
    },
  ];

  return (
    <section className="section-padding pt-32">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <span className="inline-block px-4 py-2 bg-coral/10 text-coral text-sm uppercase tracking-wider rounded-full mb-4">
            Get to Know Me
          </span>
          <h1 className="heading-xl text-white mb-4">About Me</h1>
          <p className="body-lg max-w-2xl">
            Cloud & DevOps Engineer focused on building reliable, scalable, and
            cost-effective infrastructure solutions.
          </p>
        </AnimatedSection>

        {/* Profile Image + Intro */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Profile Image */}
          <AnimatedSection delay={0.2} className="lg:col-span-1">
            <div className="relative">
              <div className="absolute inset-0 bg-coral/10 rounded-3xl blur-2xl" />
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
                <img
                  src="/images/profile.jpg"
                  alt="Afzal Khan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Intro Text */}
          <div className="lg:col-span-2">
            <StaggerContainer className="space-y-6" staggerDelay={0.15}>
              {paragraphs.slice(0, 3).map((paragraph, index) => (
                <StaggerItem key={index}>
                  <p className="body">{paragraph}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Highlights Grid */}
        <AnimatedSection delay={0.4} className="mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + index * 0.1,
                  ease: [0.165, 0.84, 0.44, 1],
                }}
                whileHover={{ y: -4 }}
                className="bg-dark-secondary border border-white/10 rounded-2xl p-6 text-center group hover:border-coral/30 transition-all duration-300"
              >
                <div className="inline-flex p-4 bg-coral/10 rounded-xl text-coral mb-4 group-hover:bg-coral/20 transition-colors duration-300">
                  <highlight.icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold uppercase tracking-tight mb-2">
                  {highlight.title}
                </h3>
                <p className="text-white/50 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* More About */}
        <AnimatedSection delay={0.6}>
          <h2 className="heading-md text-white mb-8">My Philosophy</h2>
          <StaggerContainer className="space-y-6 max-w-3xl" staggerDelay={0.15}>
            {paragraphs.slice(3).map((paragraph, index) => (
              <StaggerItem key={index}>
                <p className="body">{paragraph}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>
      </div>
    </section>
  );
}
