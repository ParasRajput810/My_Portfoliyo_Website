import React from 'react';
import "./Experience.css";
import Header from '../../components/Header/Header';
import { BackgroundGradientAnimationDemo } from "../../components/Gradient/Gradient"
import { TimelineDemo } from "../../components/timeline/timeline"
const Experience = () => {
    return (
        <>
            <Header></Header>
            <BackgroundGradientAnimationDemo></BackgroundGradientAnimationDemo>
            <TimelineDemo></TimelineDemo>
        </>
    );
};

export default Experience;
