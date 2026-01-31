export interface Project {
  id: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string[];
  outcomes: string[];
  repoLink?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "jenkins-cicd",
    title: "Jenkins CI/CD Pipeline on AWS",
    summary: "Production-grade CI/CD with Jenkins, Docker, and AWS EC2",
    problem: "Manual deployments causing downtime and errors, inconsistent release process",
    solution: "Built a cloud-hosted CI/CD pipeline using Jenkins on EC2 with Pipeline-as-Code Jenkinsfile, automating the entire Docker image lifecycle from build to deployment",
    architecture: ["Jenkins on EC2", "Jenkinsfile (Pipeline-as-Code)", "Docker image lifecycle", "Node.js + Express deployment"],
    outcomes: ["50% faster releases", "Zero-downtime deployments", "Automated rollback capability"],
    tags: ["Jenkins", "Docker", "AWS EC2", "Node.js", "CI/CD"],
  },
  {
    id: "github-actions",
    title: "GitHub Actions CI/CD + Docker Hub",
    summary: "Zero-touch deployment pipeline with GitHub Actions",
    problem: "Inconsistent deployment process across environments, manual image building",
    solution: "Implemented automated CI/CD pipeline using GitHub Actions with Docker Hub integration for seamless image publishing and deployment",
    architecture: ["GitHub repository", "GitHub Actions workflows", "Docker Hub registry", "UI-based Node.js app"],
    outcomes: ["Fully automated deployments", "Consistent environment builds", "Zero-touch releases"],
    tags: ["GitHub Actions", "Docker Hub", "Node.js", "Automation"],
  },
  {
    id: "multi-env-cicd",
    title: "Multi-Environment CI/CD",
    summary: "Production-style CI/CD with Dev/UAT/Prod separation",
    problem: "No environment isolation, risky production deployments without approvals",
    solution: "Designed separate pipelines for Dev, UAT, and Production with manual approval gates and governance controls",
    architecture: ["Dev environment pipeline", "UAT staging pipeline", "Production pipeline", "Manual approval gates"],
    outcomes: ["Deployment governance", "Production safety", "Rollback capability", "Environment isolation"],
    tags: ["CI/CD", "DevOps", "Governance", "Multi-env"],
  },
  {
    id: "serverless-ecommerce",
    title: "Serverless E-Commerce Platform",
    summary: "Enterprise-grade AWS serverless system handling 10K+ events/hour",
    problem: "Scaling challenges with traditional architecture, high infrastructure costs",
    solution: "Architected a fully serverless e-commerce platform using Lambda microservices, API Gateway, DynamoDB Global Tables with DAX, and Kinesis streams for event processing",
    architecture: ["API Gateway", "Lambda microservices", "DynamoDB Global Tables + DAX", "Kinesis streams", "AWS SAM IaC"],
    outcomes: ["99.99% uptime", "60% cost reduction", "Auto-scaling to 10K+ events/hour", "Global data replication"],
    tags: ["AWS Lambda", "Serverless", "DynamoDB", "Kinesis", "API Gateway", "SAM"],
  },
  {
    id: "ai-crm",
    title: "AI-Powered CRM Platform",
    summary: "Private, self-hosted AI CRM with workflow automation",
    problem: "Need for private AI solution without cloud dependencies, data privacy concerns",
    solution: "Built a fully self-hosted AI CRM using Docker Compose orchestration with Ollama (LLaMA), Flowise AI for visual workflow building, and n8n for automation",
    architecture: ["Docker Compose", "Ollama (LLaMA)", "Flowise AI", "n8n automation", "PostgreSQL", "Caddy reverse proxy"],
    outcomes: ["100% private AI processing", "Automated customer workflows", "HTTPS-secured endpoints", "No cloud AI dependencies"],
    tags: ["AI", "Docker", "LLaMA", "Flowise", "n8n", "PostgreSQL"],
  },
  {
    id: "splitit-saas",
    title: "SplitIT - Event-Driven SaaS",
    summary: "Cloud-native SaaS with event-driven architecture",
    problem: "Need for scalable, decoupled payment processing system",
    solution: "Designed event-driven architecture using EventBridge → SQS → ECS Fargate workers with PostgreSQL RDS for data persistence",
    architecture: ["EventBridge", "SQS queues", "ECS Fargate workers", "PostgreSQL RDS", "Stripe/PayPal integration"],
    outcomes: ["Highly scalable processing", "Decoupled microservices", "Security-first design", "Event-driven reliability"],
    tags: ["EventBridge", "SQS", "ECS Fargate", "PostgreSQL", "SaaS"],
  },
];
