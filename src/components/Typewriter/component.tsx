import React, { useState, useEffect, useMemo } from "react";
import { Wrapper, StaticText, DynamicText } from "./styles";

export interface TypewriterProps {
  mainText: string;
  dynamicText: string[];
}

const Typewriter = ({
  mainText = "Static Text",
  dynamicText = ["Option 1", "Option 2", "Option 3"],
}: TypewriterProps) => {
  const options = useMemo(() => dynamicText, [dynamicText]);

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
      <StaticText>{mainText}</StaticText>
      <DynamicText>{currentText}</DynamicText>
    </Wrapper>
  );
};

export default Typewriter;
