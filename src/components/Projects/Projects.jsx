import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { ThreeDCardDemo } from "../card/card";
import "./Projects.css";
import myimage1 from "../../assets/myimage1.png";
import myimage2 from "../../assets/myimage2.png";
import myimage3 from "../../assets/myimage3.png";
import myimage4 from "../../assets/myimage4.png";
import myimage5 from "../../assets/myimage5.png";
import myimage6 from "../../assets/myimage6.png";

export default function ProjectsSection() {
    const projects = [
        {
            id: 1,
            image: myimage1,
            title: "AI Document Generator on Azure Marketplace",
            description: ""
        },
        {
            id: 2,
            image: myimage4,
            title: "Deployment of GKE Kubernetes cluster via BitBucket Pipelines",
            description: ""
        },
        {
            id: 3,
            image: myimage2,
            title: "CRM Platform with Real-Time Referral and Payment Integration",
            description: ""
        },
        {
            id: 4,
            image: myimage3,
            title: "Cost-Optimized Multi-Site WordPress Hosting",
            description: ""
        },
        {
            id: 5,
            image: myimage5,
            title: "End-to-End CI/CD Pipeline with Kubernetes and Security",
            description: ""
        },
        {
            id: 6,
            image: myimage6,
            title: "Microservices Deployment on Google Kubernetes Engine(GKE)",
            description: ""
        }
    ];

    return (
        <>
            {/* Desktop/large screens: ContainerScroll */}
            <div className="container-scroll-desktop">
                <ContainerScroll
                    titleComponent={
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                Featured Projects
                            </span>
                        </h1>
                    }
                >
                    <div className="projects-section">
                        <div className="projects-grid">
                            {projects.map((project, idx) => (
                                <div
                                    key={project.id}
                                    className={`project-card card-animate visible delay-${idx + 1}`}
                                >
                                    <ThreeDCardDemo
                                        image={project.image}
                                        title={project.title}
                                        description={project.description}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </ContainerScroll>
            </div>

            {/* Mobile/small screens: Stacked cards */}
            <div className="projects-mobile-list">
                <h1 className="text-3xl font-bold mb-4 text-center">Featured Projects</h1>
                {projects.map((project) => (
                    <div key={project.id} className="mb-6">
                        <ThreeDCardDemo
                            image={project.image}
                            title={project.title}
                            description={project.description}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}