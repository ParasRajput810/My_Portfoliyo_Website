import React, { useRef, useEffect, useState } from "react";

export function FadeInImage({ src, alt, width, height, className }) {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );
        if (imgRef.current) observer.observe(imgRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <img
            ref={imgRef}
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`transition-opacity duration-1000 ease-in-out opacity-0 ${isVisible ? "opacity-100" : ""} ${className}`}
        />
    );
}