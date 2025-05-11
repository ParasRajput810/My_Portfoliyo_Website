"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const textRefs = useRef([]);

  const setTextRef = (el, idx) => {
    textRefs.current[idx] = el;
  };

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIdx = 0;
      let minDistance = Infinity;

      textRefs.current.forEach((el, idx) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;
          const distance = Math.abs(viewportCenter - elCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestIdx = idx;
          }
        }
      });

      setActiveCard(closestIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [content.length]);

  const backgroundColors = [
    "#0f172a", "#000000", "#171717"
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const safeActiveCard = Math.min(Math.max(activeCard, 0), content.length - 1);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[safeActiveCard % backgroundColors.length],
      }}
      className="relative flex min-h-[180vh] justify-center space-x-10 overflow-visible rounded-md p-10 pt-16"
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="my-40"
              ref={el => setTextRef(el, index)}
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: safeActiveCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: safeActiveCard === index ? 1 : 0.3 }}
                className="text-kg mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-80" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={`sticky top-16 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block ${contentClassName || ""}`}
      >
        {content[safeActiveCard]?.content ?? null}
      </div>
    </motion.div>
  );
};