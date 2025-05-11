import React from "react";
import "./DevopsToolsGrid.css";

function GradientBackdrop() {
    return <div className="devops-gradient-bg" />;
}

function DevopsToolCard({ tool, idx }) {
    return (
        <div
            className="devops-tool-card fade-in-up"
            style={{ animationDelay: `${idx * 80}ms` }}
        >
            <img
                src={tool.image}
                alt={tool.title}
                className="devops-tool-img"
                loading="lazy"
            />
            <h3 className="devops-tool-title">{tool.title}</h3>
            <p className="devops-tool-desc">{tool.description}</p>
        </div>
    );
}

const devopsTools = [
    {
        title: "Jenkins",
        description: "Open-source automation server for building, testing, and deploying software using CI/CD pipelines.",
        image: "https://cdn.worldvectorlogo.com/logos/jenkins-1.svg"
    },
    {
        title: "Terraform",
        description: "Infrastructure as code tool for provisioning and managing cloud resources safely and efficiently.",
        image: "https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg"
    },
    {
        title: "Docker",
        description: "Platform for developing, shipping, and running applications in containers for consistency across environments.",
        image: "https://cdn.worldvectorlogo.com/logos/docker.svg"
    },
    {
        title: "Kubernetes",
        description: "Open-source system for automating deployment, scaling, and management of containerized applications.",
        image: "https://cdn.worldvectorlogo.com/logos/kubernetes.svg"
    },
    {
        title: "Ansible",
        description: "Automation tool for configuration management, application deployment, and task automation.",
        image: "https://cdn.worldvectorlogo.com/logos/ansible.svg"
    },
    {
        title: "GCP",
        description: "Google Cloud Platform offers scalable compute, storage, and machine learning services.",
        image: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg"
    },
    {
        title: "Azure",
        description: "Microsoft Azure provides a comprehensive cloud platform for building, deploying, and managing applications.",
        image: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-1.svg"
    },
    {
        title: "AWS",
        description: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
        image: "https://cdn.worldvectorlogo.com/logos/aws-2.svg"
    },
    {
        title: "GitHub",
        description: "Platform for version control and collaboration, enabling multiple people to work on projects using Git.",
        image: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
    },
    {
        title: "Helm",
        description: "Kubernetes package manager for defining, installing, and upgrading complex Kubernetes applications.",
        image: "https://cdn.worldvectorlogo.com/logos/helm.svg"
    },
    {
        title: "ELK Stack",
        description: "Elasticsearch, Logstash, and Kibana for searching, analyzing, and visualizing log data in real time.",
        image: "https://cdn.worldvectorlogo.com/logos/elastic-stack.svg"
    },
    {
        title: "JFrog",
        description: "Universal DevOps solution for managing binaries and artifacts throughout the application lifecycle.",
        image: "https://cdn.worldvectorlogo.com/logos/jfrog.svg"
    },
    {
        title: "GitLab",
        description: "DevOps platform providing a single application for the entire software development lifecycle.",
        image: "https://cdn.worldvectorlogo.com/logos/gitlab.svg"
    },
    {
        title: "GitHub Actions",
        description: "CI/CD and automation tool integrated into GitHub for workflow automation.",
        image: "https://cdn.worldvectorlogo.com/logos/github-actions.svg"
    },
    {
        title: "Azure DevOps",
        description: "Microsoft's suite of development tools for software development, CI/CD, and project management.",
        image: "https://cdn.worldvectorlogo.com/logos/azure-devops.svg"
    },
    {
        title: "AWS DevOps",
        description: "AWS services designed to help you implement DevOps practices such as continuous integration and delivery.",
        image: "https://cdn.worldvectorlogo.com/logos/aws-2.svg"
    },
    {
        title: "GKE",
        description: "Google Kubernetes Engine, a managed Kubernetes service by Google Cloud.",
        image: "https://cdn.worldvectorlogo.com/logos/google-kubernetes-engine.svg"
    },
    {
        title: "AKS",
        description: "Azure Kubernetes Service, a managed Kubernetes service by Microsoft Azure.",
        image: "https://cdn.worldvectorlogo.com/logos/azure-kubernetes-service-1.svg"
    },
    {
        title: "GCR",
        description: "Google Container Registry, a private container image registry on Google Cloud.",
        image: "https://cdn.worldvectorlogo.com/logos/google-container-registry.svg"
    },
    {
        title: "EKS",
        description: "Elastic Kubernetes Service, a managed Kubernetes service by AWS.",
        image: "https://cdn.worldvectorlogo.com/logos/eks.svg"
    }
];

export default function DevopsShowcase() {
    return (
        <div className="devops-showcase-root">
            <GradientBackdrop />
            <h2 className="devops-showcase-title">DevOps Tools & Platforms</h2>
            <div className="devops-tools-grid">
                {devopsTools.map((tool, idx) => (
                    <DevopsToolCard key={tool.title} tool={tool} idx={idx} />
                ))}
            </div>
        </div>
    );
}