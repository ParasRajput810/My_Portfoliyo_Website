import React, { useEffect, useState } from "react";
import { MacbookScroll } from "../../components/ui/macbook-scroll";
import myImage from '../../assets/github_cover.png';

export function MacbookScrollDemo() {
    const [slideIn, setSlideIn] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSlideIn(true);
        }, 200); // delay before animation starts
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-6">
            <MacbookScroll
                title={
                    <span
                        className={`
                            text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold inline-block
                            transform transition-transform transition-opacity duration-[4000ms]
                            ease-[cubic-bezier(0.4,0,0.2,1)]
                            ${slideIn ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}
                        `}
                    >
                        Showcasing Innovation: My Projects & Code Journeys
                    </span>
                }
                badge={
                    <a href="https://peerlist.io/manuarora">
                        <Badge className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 transform -rotate-12" />
                    </a>
                }
                src={myImage}
                showGradient={false}
                className="flex flex-col items-center justify-center"
                imageClassName="object-contain"
                style={{}}
            />
        </div>
    );
}

const Badge = ({ className }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <circle cx="28" cy="28" r="28" fill="#00AA45" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
            fill="#219653"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
            fill="#24292E"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
            fill="white"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
            fill="#24292E"
        />
    </svg>
);