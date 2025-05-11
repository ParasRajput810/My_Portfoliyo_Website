import React from "react";
import "./SkillsShowcase.css";

const aiMlTools = [
    {
        title: "Python",
        description: "Primary programming language for AI/ML development, data analysis, and automation.",
        image: "https://cdn.worldvectorlogo.com/logos/python-5.svg"
    },
    {
        title: "scikit-learn",
        description: "Popular Python library for machine learning, offering simple and efficient tools for data mining and analysis.",
        image: "https://cdn.worldvectorlogo.com/logos/scikit-learn.svg"
    },
    {
        title: "Azure Machine Learning",
        description: "Cloud-based platform for building, training, and deploying machine learning models at scale.",
        image: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-1.svg"
    },
    {
        title: "Azure AutoML",
        description: "Automated machine learning service for building and deploying predictive models with minimal code.",
        image: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-1.svg"
    },
    {
        title: "Azure Web Apps",
        description: "Platform for deploying and hosting web applications and ML models in the cloud.",
        image: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-1.svg"
    },
    {
        title: "BOTO3",
        description: "Python SDK for AWS, enabling automation and management of AWS services, including ML workflows.",
        image: "https://cdn.worldvectorlogo.com/logos/aws-2.svg"
    },
    {
        title: "Jupyter Notebook",
        description: "Open-source web application for creating and sharing documents with live code, equations, and visualizations.",
        image: "https://cdn.worldvectorlogo.com/logos/jupyter.svg"
    },
    {
        title: "GitHub",
        description: "Platform for version control and collaboration on AI/ML projects using Git.",
        image: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
    },
    {
        title: "VS Code",
        description: "Popular code editor for AI/ML development, supporting Python and data science extensions.",
        image: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
    },
    {
        title: "Linux",
        description: "Preferred operating system for AI/ML development and deployment environments.",
        image: "https://cdn.worldvectorlogo.com/logos/linux-tux.svg"
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

export default function AiMLToolsGrid() {
    return (
        <div className="skills-showcase-root">
            <h2 className="skills-showcase-title">AI/ML Tools & Platforms</h2>
            <div className="skills-tools-grid">
                {aiMlTools.map((tool, idx) => (
                    <SkillsToolCard key={tool.title} tool={tool} idx={idx} />
                ))}
            </div>
        </div>
    );
}