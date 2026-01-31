export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Cloud Platforms",
    skills: [
      { name: "AWS (EC2, S3, RDS, Lambda, IAM, VPC, CloudWatch)", icon: "aws" },
      { name: "Azure", icon: "azure" },
      { name: "GCP", icon: "gcp" },
    ],
  },
  {
    title: "DevOps & CI/CD",
    skills: [
      { name: "Jenkins", icon: "jenkins" },
      { name: "GitHub Actions", icon: "github" },
      { name: "GitLab CI", icon: "gitlab" },
      { name: "Git", icon: "git" },
    ],
  },
  {
    title: "Containers & Orchestration",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Docker Compose", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Amazon ECR", icon: "aws" },
      { name: "ECS", icon: "aws" },
      { name: "Fargate", icon: "aws" },
    ],
  },
  {
    title: "Infrastructure as Code",
    skills: [
      { name: "Terraform", icon: "terraform" },
      { name: "AWS SAM", icon: "aws" },
      { name: "CloudFormation", icon: "aws" },
    ],
  },
  {
    title: "Backend & Automation",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "Python", icon: "python" },
      { name: "Bash", icon: "bash" },
      { name: "n8n", icon: "n8n" },
      { name: "Flowise", icon: "flowise" },
    ],
  },
  {
    title: "Databases & Streaming",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "DynamoDB", icon: "aws" },
      { name: "SQS", icon: "aws" },
      { name: "EventBridge", icon: "aws" },
      { name: "Kinesis", icon: "aws" },
      { name: "Kafka (MSK)", icon: "kafka" },
    ],
  },
];
