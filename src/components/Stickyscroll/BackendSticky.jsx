import React from "react";
import "./SkillsShowcase.css";

const backendTools = [
    {
        title: "Python",
        description: "Versatile programming language widely used for backend development, automation, and data processing.",
        image: "https://cdn.worldvectorlogo.com/logos/python-5.svg"
    },
    {
        title: "FastAPI",
        description: "Modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints.",
        image: "https://cdn.worldvectorlogo.com/logos/fastapi.svg"
    },
    {
        title: "Swagger",
        description: "Open-source tool for designing, building, documenting, and consuming RESTful web services.",
        image: "https://cdn.worldvectorlogo.com/logos/swagger.svg"
    },
    {
        title: "Node.js",
        description: "JavaScript runtime built on Chrome's V8 engine, enabling scalable backend services and APIs.",
        image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
    },
    {
        title: "Express.js",
        description: "Minimal and flexible Node.js web application framework for building robust APIs and web apps.",
        image: "https://cdn.worldvectorlogo.com/logos/express-109.svg"
    },
    {
        title: "MongoDB",
        description: "NoSQL database designed for scalability and flexibility, ideal for modern backend applications.",
        image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
    },
    {
        title: "MySQL",
        description: "Popular open-source relational database management system for structured data storage.",
        image: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg"
    },
    {
        title: "Bash",
        description: "Unix shell and command language for scripting and automating backend processes.",
        image: "https://cdn.worldvectorlogo.com/logos/gnubash.svg"
    },
    {
        title: "YAML",
        description: "Human-readable data-serialization language, often used for configuration files and data exchange.",
        image: "https://cdn.worldvectorlogo.com/logos/yaml.svg"
    },
    {
        title: "Groovy",
        description: "Powerful, optionally typed and dynamic language for the Java platform, often used in backend automation.",
        image: "https://cdn.worldvectorlogo.com/logos/groovy.svg"
    },
    {
        title: "GitHub",
        description: "Platform for version control and collaboration, enabling multiple people to work on backend projects using Git.",
        image: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
    },
    {
        title: "VS Code",
        description: "Popular code editor for backend development, supporting a wide range of languages and tools.",
        image: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
    },
    {
        title: "Eclipse",
        description: "Integrated development environment (IDE) used for Java and other backend languages.",
        image: "https://cdn.worldvectorlogo.com/logos/eclipse-11.svg"
    },
    {
        title: "Maven",
        description: "Build automation tool used primarily for Java projects, managing dependencies and project builds.",
        image: "https://cdn.worldvectorlogo.com/logos/maven.svg"
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

export default function BackendToolsGrid() {
    return (
        <div className="skills-showcase-root">
            <h2 className="skills-showcase-title">Backend Tools & Platforms</h2>
            <div className="skills-tools-grid">
                {backendTools.map((tool, idx) => (
                    <SkillsToolCard key={tool.title} tool={tool} idx={idx} />
                ))}
            </div>
        </div>
    );
}