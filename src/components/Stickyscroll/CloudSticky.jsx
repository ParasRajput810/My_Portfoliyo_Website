import React from "react";
import "./SkillsShowcase.css";

const cloudTools = [
    {
        title: "Microsoft Azure",
        description: "Comprehensive cloud platform for building, deploying, and managing applications and services.",
        image: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-1.svg"
    },
    {
        title: "Amazon Web Services (AWS)",
        description: "Reliable, scalable, and inexpensive cloud computing services for modern applications.",
        image: "https://cdn.worldvectorlogo.com/logos/aws-2.svg"
    },
    {
        title: "Google Cloud Platform (GCP)",
        description: "Scalable compute, storage, and machine learning services for cloud-native solutions.",
        image: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg"
    },
    {
        title: "Azure DevOps",
        description: "Suite of development tools for software development, CI/CD, and project management on Azure.",
        image: "https://cdn.worldvectorlogo.com/logos/azure-devops.svg"
    },
    {
        title: "AWS DevOps",
        description: "AWS services for implementing DevOps practices such as continuous integration and delivery.",
        image: "https://cdn.worldvectorlogo.com/logos/aws-2.svg"
    },
    {
        title: "Azure Web Services",
        description: "Cloud services for hosting, deploying, and managing web applications on Azure.",
        image: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-1.svg"
    },
    {
        title: "Azure ML",
        description: "Machine learning platform for building, training, and deploying models at scale.",
        image: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-1.svg"
    },
    {
        title: "Azure Blob Storage",
        description: "Massively scalable object storage for unstructured data on Azure.",
        image: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-1.svg"
    },
    {
        title: "Azure Traffic Manager",
        description: "DNS-based traffic load balancer for optimal distribution of user traffic to services.",
        image: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-1.svg"
    },
    {
        title: "Azure Application Gateway",
        description: "Web traffic load balancer for managing traffic to web applications.",
        image: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-1.svg"
    },
    {
        title: "Azure Virtual Network (VNet)",
        description: "Fundamental building block for private networks in Azure.",
        image: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-1.svg"
    },
    {
        title: "BOTO3",
        description: "Python SDK for AWS, enabling automation and management of AWS services.",
        image: "https://cdn.worldvectorlogo.com/logos/aws-2.svg"
    },
    {
        title: "AZ-104: Azure Administrator Associate",
        description: "Microsoft certification validating skills in implementing, managing, and monitoring Azure environments.",
        image: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg"
    }
];

function SkillsToolCard({ tool, idx }) {
    return (
        <div
            className="skills-tool-card fade-in-up"
            style={{ animationDelay: `${idx * 80}ms` }}
        >
            <img
                src={tool.image}
                alt={tool.title}
                className="skills-tool-img"
                loading="lazy"
            />
            <h3 className="skills-tool-title">{tool.title}</h3>
            <p className="skills-tool-desc">{tool.description}</p>
        </div>
    );
}

export default function CloudToolsGrid() {
    return (
        <div className="skills-showcase-root">
            <h2 className="skills-showcase-title">Cloud Tools & Platforms</h2>
            <div className="skills-tools-grid">
                {cloudTools.map((tool, idx) => (
                    <SkillsToolCard key={tool.title} tool={tool} idx={idx} />
                ))}
            </div>
        </div>
    );
}