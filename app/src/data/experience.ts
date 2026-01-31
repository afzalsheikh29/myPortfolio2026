export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: "cloud-devops-engineer",
    title: "Cloud & DevOps Engineer",
    company: "ATH Infosystems",
    period: "Sept 2024 – Present",
    location: "Noida, India",
    achievements: [
      "CI/CD Pipeline Optimization: Engineered multi-stage CI/CD pipelines using Jenkins and GitLab, automating build, test, and deployment cycles which reduced release time by 50% and ensured zero-downtime deployments",
      "Infrastructure as Code (IaC): Provisioned and managed scalable cloud infrastructure using Terraform, implementing state management and drift detection to standardize production environments across AWS and Azure",
      "Kubernetes Orchestration: Deployed microservices utilizing Docker and Kubernetes, configuring Horizontal Pod Autoscaling (HPA) and Ingress controllers to ensure high availability under heavy traffic loads",
      "Cloud Cost Optimization: Managed multi-cloud operations (AWS/GCP) with 99.9% uptime; implemented Auto Scaling Groups and spot instances, resulting in a 25% reduction in monthly cloud infrastructure costs",
      "Process Automation: Developed automated workflows using n8n and Python scripts for lead data compliance and auditing, reducing manual operational overhead by 40%",
      "Marketplace Integration: Integrated HawkSearch indexing into BigCommerce via RESTful APIs and optimized python-based backend jobs for seamless product listing across cloud marketplaces",
    ],
  },
  {
    id: "cloud-devops-intern",
    title: "Cloud DevOps Intern",
    company: "ATH Infosystems",
    period: "May 2024 – Aug 2024",
    location: "Noida, India",
    achievements: [
      "Linux System Administration: Administered Linux environments (Ubuntu/CentOS), performing user management, permission hardening, and automation of routine system tasks using Bash scripting",
      "Web Server Configuration: Configured and hardened LAMP stacks, setting up Apache/Nginx reverse proxies, SSL certificates, and firewall rules (UFW/Security Groups) to secure web traffic",
      "Network Management: Designed Virtual Private Cloud (VPC) architectures including public/private subnets, Route Tables, and NAT Gateways to ensure secure network isolation for cloud resources",
    ],
  },
];
