"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function ThreeDCardDemo({ image, title, description }) {
    const navigate = useNavigate();

    return (
        <CardContainer className="inter-var w-full max-w-[30rem]">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">

                {/* Image wrapper with dark background */}
                <CardItem
                    translateZ="100"
                    className="w-full mt-4 relative overflow-hidden rounded-xl bg-black"
                >
                    <img
                        src={image}
                        height="1000"
                        width="1000"
                        className="h-[600px] w-full object-cover group-hover/card:shadow-xl"
                        alt={title}
                    />
                </CardItem>

                {/* Title */}
                <CardItem
                    as="h2"
                    translateZ="80"
                    className="text-xl font-bold mt-4 dark:text-white"
                >
                    {title}
                </CardItem>

                {/* Description */}
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {description}
                </CardItem>

                {/* Button */}
                <div className="flex justify-between items-center mt-6">
                    <CardItem
                        translateZ={20}
                        as="button"
                        onClick={() => navigate("/projects")}
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer"
                    >
                        Learn More
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
