"use client";
import React, { useEffect, useRef, useState } from "react";
import { MotionValue, motion, useScroll, useTransform } from "motion/react";
import { cn } from "../../lib/utils";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
} from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";
import { IconCommand } from "@tabler/icons-react";
import { IconCaretLeftFilled } from "@tabler/icons-react";
import { IconCaretDownFilled } from "@tabler/icons-react";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
  className,
  imageClassName,
  style,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
  className?: string;
  imageClassName?: string;
  style?: React.CSSProperties;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsMobile(true);
        setIsTablet(false);
      } else if (window.innerWidth < 1024) {
        setIsMobile(false);
        setIsTablet(true);
      } else {
        setIsMobile(false);
        setIsTablet(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust scale based on screen size
  const getScaleFactor = () => {
    if (isMobile) return 0.5;
    if (isTablet) return 0.75;
    return 1;
  };

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1.1 : isTablet ? 1.3 : 1.5],
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 0.9 : isTablet ? 1.2 : 1.5],
  );
  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? 800 : isTablet ? 1000 : 1500],
  );
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, isMobile ? 50 : 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className={`flex min-h-[150vh] sm:min-h-[180vh] md:min-h-[200vh] shrink-0 transform flex-col items-center justify-start py-0 [perspective:800px] w-full max-w-[90vw] mx-auto ${className || ''}`}
      style={{
        ...style,
        transform: `scale(${getScaleFactor()})`,
      }}
    >
      <motion.h2
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="mb-10 sm:mb-16 md:mb-20 text-center text-xl sm:text-2xl md:text-3xl font-bold text-neutral-800 dark:text-white w-full px-2"
      >
        {title || (
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        )}
      </motion.h2>
      {/* Lid */}
      <Lid
        src={src}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate}
        imageClassName={imageClassName}
      />
      {/* Base area */}
      <div className="relative -z-10 h-[18rem] sm:h-[20rem] md:h-[22rem] w-[26rem] sm:w-[28rem] md:w-[32rem] overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]">
        {/* above keyboard bar */}
        <div className="relative h-8 sm:h-9 md:h-10 w-full">
          <div className="absolute inset-x-0 mx-auto h-3 sm:h-3.5 md:h-4 w-[80%] bg-[#050505]" />
        </div>
        <div className="relative flex">
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
          <div className="mx-auto h-full w-[80%]">
            <Keypad isMobile={isMobile} isTablet={isTablet} />
          </div>
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
        </div>
        <Trackpad isMobile={isMobile} />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-1.5 sm:h-1.5 md:h-2 w-16 sm:w-18 md:w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />
        {showGradient && (
          <div className="absolute inset-x-0 bottom-0 z-50 h-24 sm:h-32 md:h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black"></div>
        )}
        {badge && <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4">{badge}</div>}
      </div>
    </div>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
  imageClassName,
}: {
  scaleX: MotionValue<number>;
  scaleY: MotionValue<number>;
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
  src?: string;
  imageClassName?: string;
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="relative h-[10rem] sm:h-[11rem] md:h-[12rem] w-[26rem] sm:w-[28rem] md:w-[32rem] rounded-2xl bg-[#010101] p-1.5 sm:p-1.5 md:p-2"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px #171717 inset",
          }}
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]"
        >
          <span className="text-white">
            <AceternityLogo />
          </span>
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="absolute inset-0 h-80 sm:h-88 md:h-96 w-[26rem] sm:w-[28rem] md:w-[32rem] rounded-2xl bg-[#010101] p-1.5 sm:p-1.5 md:p-2"
      >
        <div className="absolute inset-0 rounded-lg bg-[#272729]" />
        <img
          src={src as string}
          alt="aceternity logo"
          className={`absolute inset-0 h-full w-full rounded-lg ${imageClassName || 'object-cover object-left-top'}`}
        />
      </motion.div>
    </div>
  );
};

export const Trackpad = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div
      className="mx-auto my-0.5 sm:my-0.5 md:my-1 h-24 sm:h-28 md:h-32 w-[40%] rounded-xl"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}
    ></div>
  );
};

export const Keypad = ({ isMobile, isTablet }: { isMobile: boolean; isTablet: boolean }) => {
  const fontSize = isMobile ? "text-[4px]" : isTablet ? "text-[4.5px]" : "text-[5px]";
  const iconSize = isMobile ? "h-[5px] w-[5px]" : isTablet ? "h-[5.5px] w-[5.5px]" : "h-[6px] w-[6px]";

  return (
    <div className="mx-1 h-full [transform:translateZ(0)] rounded-md bg-[#050505] p-0.5 sm:p-0.5 md:p-1 [will-change:transform]">
      {/* First Row */}
      <div className="mb-[1px] sm:mb-[1.5px] md:mb-[2px] flex w-full shrink-0 gap-[1px] sm:gap-[1.5px] md:gap-[2px]">
        <KBtn
          className="w-8 sm:w-9 md:w-10 items-end justify-start pb-[1px] sm:pb-[1.5px] md:pb-[2px] pl-[2px] sm:pl-[3px] md:pl-[4px]"
          childrenClassName="items-start"
        >
          esc
        </KBtn>
        <KBtn>
          <IconBrightnessDown className={iconSize} />
          <span className={`mt-0.5 sm:mt-0.5 md:mt-1 inline-block ${fontSize}`}>F1</span>
        </KBtn>
        <KBtn>
          <IconBrightnessUp className={iconSize} />
          <span className={`mt-0.5 sm:mt-0.5 md:mt-1 inline-block ${fontSize}`}>F2</span>
        </KBtn>
        <KBtn>
          <IconTable className={iconSize} />
          <span className={`mt-0.5 sm:mt-0.5 md:mt-1 inline-block ${fontSize}`}>F3</span>
        </KBtn>
        <KBtn>
          <IconSearch className={iconSize} />
          <span className={`mt-0.5 sm:mt-0.5 md:mt-1 inline-block ${fontSize}`}>F4</span>
        </KBtn>
        <KBtn>
          <IconMicrophone className={iconSize} />
          <span className={`mt-0.5 sm:mt-0.5 md:mt-1 inline-block ${fontSize}`}>F5</span>
        </KBtn>
        <KBtn>
          <IconMoon className={iconSize} />
          <span className={`mt-0.5 sm:mt-0.5 md:mt-1 inline-block ${fontSize}`}>F6</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackPrev className={iconSize} />
          <span className={`mt-0.5 sm:mt-0.5 md:mt-1 inline-block ${fontSize}`}>F7</span>
        </KBtn>
        <KBtn>
          <IconPlayerSkipForward className={iconSize} />
          <span className={`mt-0.5 sm:mt-0.5 md:mt-1 inline-block ${fontSize}`}>F8</span>
        </KBtn>
        <KBtn>
          <IconPlayerTrackNext className={iconSize} />
          <span className={`mt-0.5 sm:mt-0.5 md:mt-1 inline-block ${fontSize}`}>F8</span>
        </KBtn>
        <KBtn>
          <IconVolume3 className={iconSize} />
          <span className={`mt-0.5 sm:mt-0.5 md:mt-1 inline-block ${fontSize}`}>F10</span>
        </KBtn>
        <KBtn>
          <IconVolume2 className={iconSize} />
          <span className={`mt-0.5 sm:mt-0.5 md:mt-1 inline-block ${fontSize}`}>F11</span>
        </KBtn>
        <KBtn>
          <IconVolume className={iconSize} />
          <span className={`mt-0.5 sm:mt-0.5 md:mt-1 inline-block ${fontSize}`}>F12</span>
        </KBtn>
        <KBtn>
          <div className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 rounded-full bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px">
            <div className="h-full w-full rounded-full bg-black" />
          </div>
        </KBtn>
      </div>

      {/* Second row */}
      <div className="mb-[1px] sm:mb-[1.5px] md:mb-[2px] flex w-full shrink-0 gap-[1px] sm:gap-[1.5px] md:gap-[2px]">
        <KBtn>
          <span className={`block ${fontSize}`}>~</span>
          <span className={`mt-0.5 block ${fontSize}`}>`</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>!</span>
          <span className={`block ${fontSize}`}>1</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>@</span>
          <span className={`block ${fontSize}`}>2</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>#</span>
          <span className={`block ${fontSize}`}>3</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>$</span>
          <span className={`block ${fontSize}`}>4</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>%</span>
          <span className={`block ${fontSize}`}>5</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>^</span>
          <span className={`block ${fontSize}`}>6</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>&</span>
          <span className={`block ${fontSize}`}>7</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>*</span>
          <span className={`block ${fontSize}`}>8</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>(</span>
          <span className={`block ${fontSize}`}>9</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>)</span>
          <span className={`block ${fontSize}`}>0</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>&mdash;</span>
          <span className={`block ${fontSize}`}>_</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>+</span>
          <span className={`block ${fontSize}`}> = </span>
        </KBtn>
        <KBtn
          className="w-8 sm:w-9 md:w-10 items-end justify-end pr-[2px] sm:pr-[3px] md:pr-[4px] pb-[1px] sm:pb-[1.5px] md:pb-[2px]"
          childrenClassName="items-end"
        >
          <span className={fontSize}>delete</span>
        </KBtn>
      </div>

      {/* Third row */}
      <div className="mb-[1px] sm:mb-[1.5px] md:mb-[2px] flex w-full shrink-0 gap-[1px] sm:gap-[1.5px] md:gap-[2px]">
        <KBtn
          className="w-8 sm:w-9 md:w-10 items-end justify-start pb-[1px] sm:pb-[1.5px] md:pb-[2px] pl-[2px] sm:pl-[3px] md:pl-[4px]"
          childrenClassName="items-start"
        >
          <span className={fontSize}>tab</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>Q</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>W</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>E</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>R</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>T</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>Y</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>U</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>I</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>O</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>P</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>{`{`}</span>
          <span className={`block ${fontSize}`}>{`[`}</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>{`}`}</span>
          <span className={`block ${fontSize}`}>{`]`}</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>{`|`}</span>
          <span className={`block ${fontSize}`}>{`\\`}</span>
        </KBtn>
      </div>

      {/* Fourth Row */}
      <div className="mb-[1px] sm:mb-[1.5px] md:mb-[2px] flex w-full shrink-0 gap-[1px] sm:gap-[1.5px] md:gap-[2px]">
        <KBtn
          className="w-[2.2rem] sm:w-[2.5rem] md:w-[2.8rem] items-end justify-start pb-[1px] sm:pb-[1.5px] md:pb-[2px] pl-[2px] sm:pl-[3px] md:pl-[4px]"
          childrenClassName="items-start"
        >
          <span className={fontSize}>caps lock</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>A</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>S</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>D</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>F</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>G</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>H</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>J</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>K</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>L</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>{`:`}</span>
          <span className={`block ${fontSize}`}>{`;`}</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>{`"`}</span>
          <span className={`block ${fontSize}`}>{`'`}</span>
        </KBtn>
        <KBtn
          className="w-[2.3rem] sm:w-[2.6rem] md:w-[2.85rem] items-end justify-end pr-[2px] sm:pr-[3px] md:pr-[4px] pb-[1px] sm:pb-[1.5px] md:pb-[2px]"
          childrenClassName="items-end"
        >
          <span className={fontSize}>return</span>
        </KBtn>
      </div>

      {/* Fifth Row */}
      <div className="mb-[1px] sm:mb-[1.5px] md:mb-[2px] flex w-full shrink-0 gap-[1px] sm:gap-[1.5px] md:gap-[2px]">
        <KBtn
          className="w-[2.9rem] sm:w-[3.3rem] md:w-[3.65rem] items-end justify-start pb-[1px] sm:pb-[1.5px] md:pb-[2px] pl-[2px] sm:pl-[3px] md:pl-[4px]"
          childrenClassName="items-start"
        >
          <span className={fontSize}>shift</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>Z</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>X</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>C</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>V</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>B</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>N</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>M</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>{`<`}</span>
          <span className={`block ${fontSize}`}>{`,`}</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>{`>`}</span>
          <span className={`block ${fontSize}`}>{`.`}</span>
        </KBtn>
        <KBtn>
          <span className={`block ${fontSize}`}>{`?`}</span>
          <span className={`block ${fontSize}`}>{`/`}</span>
        </KBtn>
        <KBtn
          className="w-[2.9rem] sm:w-[3.3rem] md:w-[3.65rem] items-end justify-end pr-[2px] sm:pr-[3px] md:pr-[4px] pb-[1px] sm:pb-[1.5px] md:pb-[2px]"
          childrenClassName="items-end"
        >
          <span className={fontSize}>shift</span>
        </KBtn>
      </div>

      {/* Sixth Row */}
      <div className="mb-[1px] sm:mb-[1.5px] md:mb-[2px] flex w-full shrink-0 gap-[1px] sm:gap-[1.5px] md:gap-[2px]">
        <KBtn className="" childrenClassName="h-full justify-between py-[2px] sm:py-[3px] md:py-[4px]">
          <div className="flex w-full justify-end pr-0.5 sm:pr-0.5 md:pr-1">
            <span className={`block ${fontSize}`}>fn</span>
          </div>
          <div className="flex w-full justify-start pl-0.5 sm:pl-0.5 md:pl-1">
            <IconWorld className={iconSize} />
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[2px] sm:py-[3px] md:py-[4px]">
          <div className="flex w-full justify-end pr-0.5 sm:pr-0.5 md:pr-1">
            <IconChevronUp className={iconSize} />
          </div>
          <div className="flex w-full justify-start pl-0.5 sm:pl-0.5 md:pl-1">
            <span className={`block ${fontSize}`}>control</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[2px] sm:py-[3px] md:py-[4px]">
          <div className="flex w-full justify-end pr-0.5 sm:pr-0.5 md:pr-1">
            <OptionKey className={iconSize} />
          </div>
          <div className="flex w-full justify-start pl-0.5 sm:pl-0.5 md:pl-1">
            <span className={`block ${fontSize}`}>option</span>
          </div>
        </KBtn>
        <KBtn
          className="w-6 sm:w-7 md:w-8"
          childrenClassName="h-full justify-between py-[2px] sm:py-[3px] md:py-[4px]"
        >
          <div className="flex w-full justify-end pr-0.5 sm:pr-0.5 md:pr-1">
            <IconCommand className={iconSize} />
          </div>
          <div className="flex w-full justify-start pl-0.5 sm:pl-0.5 md:pl-1">
            <span className={`block ${fontSize}`}>command</span>
          </div>
        </KBtn>
        <KBtn className="w-[6.5rem] sm:w-[7.5rem] md:w-[8.2rem]"></KBtn>
        <KBtn
          className="w-6 sm:w-7 md:w-8"
          childrenClassName="h-full justify-between py-[2px] sm:py-[3px] md:py-[4px]"
        >
          <div className="flex w-full justify-start pl-0.5 sm:pl-0.5 md:pl-1">
            <IconCommand className={iconSize} />
          </div>
          <div className="flex w-full justify-start pl-0.5 sm:pl-0.5 md:pl-1">
            <span className={`block ${fontSize}`}>command</span>
          </div>
        </KBtn>
        <KBtn className="" childrenClassName="h-full justify-between py-[2px] sm:py-[3px] md:py-[4px]">
          <div className="flex w-full justify-start pl-0.5 sm:pl-0.5 md:pl-1">
            <OptionKey className={iconSize} />
          </div>
          <div className="flex w-full justify-start pl-0.5 sm:pl-0.5 md:pl-1">
            <span className={`block ${fontSize}`}>option</span>
          </div>
        </KBtn>
        <div className="mt-[1px] sm:mt-[1.5px] md:mt-[2px] flex h-5 sm:h-5.5 md:h-6 w-[3.9rem] sm:w-[4.4rem] md:w-[4.9rem] flex-col items-center justify-end rounded-[3px] sm:rounded-[3.5px] md:rounded-[4px] p-[0.3px] sm:p-[0.4px] md:p-[0.5px]">
          <KBtn className="h-2.5 sm:h-2.8 md:h-3 w-5 sm:w-5.5 md:w-6">
            <IconCaretUpFilled className={iconSize} />
          </KBtn>
          <div className="flex">
            <KBtn className="h-2.5 sm:h-2.8 md:h-3 w-5 sm:w-5.5 md:w-6">
              <IconCaretLeftFilled className={iconSize} />
            </KBtn>
            <KBtn className="h-2.5 sm:h-2.8 md:h-3 w-5 sm:w-5.5 md:w-6">
              <IconCaretDownFilled className={iconSize} />
            </KBtn>
            <KBtn className="h-2.5 sm:h-2.8 md:h-3 w-5 sm:w-5.5 md:w-6">
              <IconCaretRightFilled className={iconSize} />
            </KBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true,
}: {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  backlit?: boolean;
}) => {
  return (
    <div
      className={cn(
        "[transform:translateZ(0)] rounded-[3px] sm:rounded-[3.5px] md:rounded-[4px] p-[0.3px] sm:p-[0.4px] md:p-[0.5px] [will-change:transform]",
        backlit && "bg-white/[0.2] shadow-xl shadow-white",
      )}
    >
      <div
        className={cn(
          "flex h-5 sm:h-5.5 md:h-6 w-5 sm:w-5.5 md:w-6 items-center justify-center rounded-[2.5px] sm:rounded-[3px] md:rounded-[3.5px] bg-[#0A090D]",
          className,
        )}
        style={{
          boxShadow:
            "0px -0.3px 1.5px 0 #0D0D0F inset, -0.3px 0px 1.5px 0 #0D0D0F inset",
        }}
      >
        <div
          className={cn(
            "flex w-full flex-col items-center justify-center text-neutral-200",
            childrenClassName,
            backlit && "text-white",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const SpeakerGrid = () => {
  return (
    <div
      className="mt-1.5 sm:mt-1.8 md:mt-2 flex h-32 sm:h-36 md:h-40 gap-[1.5px] sm:gap-[2px] px-[0.3px] sm:px-[0.4px] md:px-[0.5px]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #08080A 0.4px, transparent 0.4px)",
        backgroundSize: "2.5px 2.5px",
      }}
    ></div>
  );
};

export const OptionKey = ({ className }: { className: string }) => {
  return (
    <svg
      fill="none"
      version="1.1"
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
    >
      <rect
        stroke="currentColor"
        strokeWidth={2}
        x="18"
        y="5"
        width="10"
        height="2"
      />
      <polygon
        stroke="currentColor"
        strokeWidth={2}
        points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
      />
      <rect
        id="_Transparent_Rectangle_"
        className="st0"
        width="32"
        height="32"
        stroke="none"
      />
    </svg>
  );
};

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-2.5 sm:h-2.8 md:h-3 w-2.5 sm:w-2.8 md:w-3 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};