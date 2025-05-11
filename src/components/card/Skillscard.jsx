"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card-Skills";

export function ThreeDCardDemo({
    image,
    description,
    buttonText,
    onButtonClick, // 1. Accept the prop
}) {
    return (
        <CardContainer className="inter-var w-full max-w-[30rem]">
            <CardBody className="bg-white relative group/card border border-gray-200 w-full h-auto rounded-xl p-6">
                <CardItem translateZ="100" className="w-full mt-4">
                    <img
                        src={image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>

                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-700 text-sm max-w-sm mt-2"
                >
                    {description}
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition"
                        onClick={onButtonClick} // 2. Use the prop here
                    >
                        {buttonText}
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}