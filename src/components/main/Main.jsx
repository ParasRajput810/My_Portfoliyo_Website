import React, { useEffect } from "react";
import {
    FaServer,
    FaTools,
    FaCloud,
    FaBrain,
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaPhone,
    FaWhatsapp
} from "react-icons/fa";
import './Main.css';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";
import ProjectsSection from '../Projects/Projects';
import avatar from "../../assets/avatar.jpg";

export default function MainSection() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <main className="main-section-bg">
            <div className="main-section-card">
                {/* Top */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="main-title">Paras Rajput</h1>
                        <div className="main-subtitle typing-effect">
                            <Typewriter
                                words={['DevOps Engineer', 'Cloud Engineer', 'Backend Developer']}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </div>
                        <p className="main-desc">
                            A passionate developer who builds scalable systems and robust infrastructure. Exploring the edge of cloud and AI.
                        </p>
                    </div>
                    <div className="flex items-center mt-6 md:mt-0">
                        <div className="main-avatar">
                            <img
                                src={avatar}
                                alt="Paras Rajput"
                                className="w-32 h-32 rounded-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Skills & Contact */}
                <div className="flex flex-col md:flex-row gap-8 mt-12">
                    <div className="flex-1 cursor-pointer" onClick={() => navigate("/skills")}>
                        <h2 className="main-section-heading">Skills</h2>
                        <div className="flex gap-4 flex-wrap">
                            <div className="main-skill-card" data-aos="zoom-in">
                                <FaServer className="main-skill-badge" />
                                <div className="main-skill-title">Backend</div>
                            </div>
                            <div className="main-skill-card" data-aos="zoom-in" data-aos-delay="100">
                                <FaTools className="main-skill-badge" />
                                <div className="main-skill-title">DevOps</div>
                            </div>
                            <div className="main-skill-card" data-aos="zoom-in" data-aos-delay="200">
                                <FaCloud className="main-skill-badge" />
                                <div className="main-skill-title">Cloud</div>
                            </div>
                            <div className="main-skill-card" data-aos="zoom-in" data-aos-delay="300">
                                <FaBrain className="main-skill-badge" />
                                <div className="main-skill-title">AI / ML</div>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex-1">
                        <h2 className="main-section-heading">Send</h2>
                        <form
                            className="main-send-card"
                            data-aos="fade-up"
                            action="https://formsubmit.co/pr8101999@gmail.com"
                            method="POST"
                        >
                            <input type="hidden" name="_subject" value="Mail from the website" />
                            <input type="hidden" name="_next" value={window.location.href} />
                            <input type="hidden" name="_captcha" value="false" />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                                className="main-send-input"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Your message here..."
                                className="main-send-input"
                                required
                                rows={4}
                            />
                            <button type="submit" className="main-send-btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Projects Section */}
                <ProjectsSection />

                {/* Premium Connect Footer - Responsive */}
                <footer className="premium-footer-section mt-12" data-aos="fade-up">
                    <div className="w-full max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        {/* Social Links */}
                        <div className="flex-1 w-full">
                            <h2 className="premium-footer-title text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
                                Connect with Paras Rajput
                            </h2>
                            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                                <a
                                    href="https://github.com/ParasRajput810"
                                    className="premium-footer-icon github flex items-center gap-2 text-gray-700 hover:text-black"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="GitHub"
                                >
                                    <FaGithub />
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/paras-rajput-a4295823b/"
                                    className="premium-footer-icon linkedin flex items-center gap-2 text-blue-700 hover:text-blue-900"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="LinkedIn"
                                >
                                    <FaLinkedin />
                                    <span>LinkedIn</span>
                                </a>
                                <a
                                    href="mailto:pr8101999@gmail.com"
                                    className="premium-footer-icon email flex items-center gap-2 text-red-600 hover:text-red-800"
                                    title="Email"
                                >
                                    <FaEnvelope />
                                    <span>Email</span>
                                </a>
                            </div>
                        </div>
                        {/* Contact Info */}
                        <div className="flex-1 w-full mt-6 md:mt-0">
                            <div className="flex flex-col gap-4 items-center md:items-start">
                                <div className="flex items-center gap-2">
                                    <FaPhone className="premium-footer-contact-icon phone" />
                                    <a href="tel:+918383040675" className="premium-footer-contact-link">
                                        +91 8383040675
                                    </a>
                                    <span className="premium-footer-contact-label text-xs text-gray-500">Call & WhatsApp</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaWhatsapp className="premium-footer-contact-icon whatsapp" />
                                    <a
                                        href="https://wa.me/4915510349017"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="premium-footer-contact-link"
                                    >
                                        +49 15510349017
                                    </a>
                                    <span className="premium-footer-contact-label text-xs text-gray-500">WhatsApp only</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaEnvelope className="premium-footer-contact-icon email" />
                                    <a
                                        href="mailto:pr8101999@gmail.com"
                                        className="premium-footer-contact-link"
                                    >
                                        pr8101999@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                {/* Footer */}
                <div className="mt-12">
                    <p className="main-copyright">
                        &copy; 2025 Paras Rajput. All rights reserved.
                    </p>
                </div>
            </div>
        </main>
    );
}