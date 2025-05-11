"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";
import { motion } from "framer-motion";
import "./Geminieffect.css"

export function GoogleGeminiEffectDemo() {
    const ref = React.useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    const title = "Crafting Scalable Experiences in Code & Cloud";
    const description =
        "Designing modern infrastructure, resilient backends, and seamless frontends with a passion for DevOps, cloud platforms, and fullstack development. Every line of code pushes toward automation, performance, and elegance.";

    return (
        <div
            ref={ref}
            className="h-[400vh] bg-black w-full border border-gray-800 rounded-md relative overflow-clip text-white"
        >
            <div className="sticky top-0 z-20 w-full px-6 md:px-20 pt-40 text-center bg-black bg-opacity-80 backdrop-blur-md">
                <motion.h1
                    className="text-2xl md:text-4xl font-semibold tracking-tight text-cyan-300 drop-shadow-lg typewriter-animation"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    {title}
                </motion.h1>
                <motion.p
                    className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-gray-300/90 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                >
                    {description}
                </motion.p>
            </div>

            <GoogleGeminiEffect
                pathLengths={[
                    pathLengthFirst,
                    pathLengthSecond,
                    pathLengthThird,
                    pathLengthFourth,
                    pathLengthFifth,
                ]}
            />
        </div>
    );
}
