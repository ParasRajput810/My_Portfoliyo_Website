import React, { useState, useRef, useEffect } from "react";
import Header from "../../components/Header/Header";
import { motion, useInView } from "framer-motion";
import { GoogleGeminiEffectDemo } from "../../components/Geminieffect/Geminieffect";
import { ThreeDCardDemo } from "../../components/card/Skillscard";
import DevopsToolsGrid from "../../components/Stickyscroll/DevopsSticky"; // <-- Use the correct import
import BackendToolsGrid from "../../components/Stickyscroll/BackendSticky";
import CloudToolsGrid from "../../components/Stickyscroll/CloudSticky";
import AiMLToolsGrid from "../../components/Stickyscroll/AiMLSticky";
import "./Skills.css";
// import { TypewriterEffect } from "../../components/Typewriter/Typewriter";


const cardData = [
    {
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
        description: "DevOps Engineer: Automating deployments and managing cloud infrastructure with Docker, Kubernetes, and AWS.",
        buttonText: "View DevOps Tools",
        sticky: "devops"
    },
    {
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        description: "Backend Engineer: Designing robust APIs and scalable backend systems with Node.js, Express, and MongoDB.",
        buttonText: "View Backend Tools",
        sticky: "backend"
    },
    {
        image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&w=800&q=80",
        description: "Cloud Engineer: Building and maintaining scalable cloud solutions using AWS, Azure, and Google Cloud.",
        buttonText: "View Cloud Tools",
        sticky: "cloud"
    },
    {
        image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&w=800&q=80",
        description: "AI/ML Engineer: Developing intelligent systems and models using Python, TensorFlow, and PyTorch.",
        buttonText: "View AI/ML Tools",
        sticky: "aiml"
    },
];

export default function Skills() {

    const [selectedSticky, setSelectedSticky] = useState(null);
    const stickyRef = useRef(null);
    const titleRef = useRef(null);
    const isInView = useInView(titleRef, { once: true, margin: "-100px" });
    useEffect(() => {
        if (selectedSticky && stickyRef.current) {
            stickyRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
            stickyRef.current.focus();
        }
    }, [selectedSticky]);

    const renderSticky = () => {
        switch (selectedSticky) {
            case "devops":
                return <DevopsToolsGrid />;
            case "backend":
                return <BackendToolsGrid />; // <-- Use the grid here
            case "cloud":
                return <CloudToolsGrid />;
            case "aiml":
                return <AiMLToolsGrid />;
            default:
                return null;
        }
    };

    return (
        <>
            <Header />
            <GoogleGeminiEffectDemo />
            <h1 className="skills-s1">Skills</h1>
            <div className="skills-section">

                <div className="skills-grid">

                    {cardData.map((card, idx) => (
                        <div
                            key={idx}
                            className={`skill-card card-animate visible delay-${idx + 1}`}
                        >

                            <ThreeDCardDemo
                                image={card.image}
                                description={card.description}
                                buttonText={card.buttonText}
                                onButtonClick={() => setSelectedSticky(card.sticky)}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {selectedSticky && (
                <div
                    ref={stickyRef}
                    tabIndex={-1}
                    style={{ outline: "none" }}
                >
                    {renderSticky()}
                </div>
            )}
        </>
    );
}