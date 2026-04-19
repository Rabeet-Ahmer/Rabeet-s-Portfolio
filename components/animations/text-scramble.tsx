"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const GLYPHS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

type TextScrambleProps = {
  text: string;
  className?: string;
  /** Delay in ms before scramble starts */
  delay?: number;
  /** Speed in ms per character reveal */
  revealSpeed?: number;
  /** Whether to trigger the animation */
  trigger?: boolean;
};

export function TextScramble({
  text,
  className,
  delay = 0,
  revealSpeed = 30,
  trigger = true,
}: TextScrambleProps) {
  const [display, setDisplay] = useState(text);
  const revealed = useRef(0);
  const started = useRef(false);

  const scramble = useCallback(() => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (i < revealed.current) {
        result += text[i];
      } else if (text[i] === " ") {
        result += " ";
      } else {
        result += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
    }
    return result;
  }, [text]);

  useEffect(() => {
    if (!trigger || started.current) return;

    const startTimeout = setTimeout(() => {
      started.current = true;
      revealed.current = 0;

      const scrambleInterval = setInterval(
        () => setDisplay(scramble()),
        50
      );

      const revealInterval = setInterval(() => {
        revealed.current++;
        if (revealed.current > text.length) {
          clearInterval(revealInterval);
          clearInterval(scrambleInterval);
          setDisplay(text);
        }
      }, revealSpeed);

      return () => {
        clearInterval(scrambleInterval);
        clearInterval(revealInterval);
      };
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [trigger, text, delay, revealSpeed, scramble]);

  return <span className={className}>{display}</span>;
}
