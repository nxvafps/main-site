import React, { FC, useState, useEffect, useMemo } from "react";
import { Wrapper, StaticText, DynamicText } from "./styles";

const Typewriter: FC = () => {
  const options = useMemo(
    () => [
      "Problem Solver",
      "Web Developer",
      "Software Developer",
      "Youtuber",
      "Designer",
      "Streamer",
    ],
    []
  );

  const [currentOptionIndex, setCurrentOptionIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentOption = options[currentOptionIndex];
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentOptionIndex((prev) => (prev + 1) % options.length);
        }
      } else {
        setCurrentText((prev) => currentOption.slice(0, prev.length + 1));
        if (currentText === currentOption) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, 1000);
        }
      }
    };

    if (!isPaused) {
      const typingSpeed = isDeleting ? 50 : 150;
      const timeout = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [currentText, isDeleting, currentOptionIndex, options, isPaused]);

  return (
    <Wrapper>
      <StaticText>I am a </StaticText>
      <DynamicText>{currentText}</DynamicText>
    </Wrapper>
  );
};

export default Typewriter;
