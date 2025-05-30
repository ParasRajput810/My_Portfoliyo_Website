import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

export function BackgroundGradientAnimationDemo() {
    return (
        <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-cyan-400 via-fuchsia-500 to-yellow-300">
                    Experience. Expertise. Excellence.
                </p>
            </div>
        </BackgroundGradientAnimation>
    );
}