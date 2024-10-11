import styled, { css, keyframes } from "styled-components";

const animateTop = keyframes`
  0% {
    transform: translateY(0) rotate(0);
  }
  25% {
    transform: translateY(10px) rotate(0);
  }
  50% {
    transform: translateY(10px) rotate(45deg);
  }
  100% {
    transform: translateY(10px) rotate(45deg);
  }
`;

const animateTopReverse = keyframes`
  0% {
    transform: translateY(10px) rotate(45deg);
  }
  50% {
    transform: translateY(10px) rotate(45deg);
  }
  75% {
    transform: translateY(10px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
`;

const animateMiddle = keyframes`
    0% {
        opacity: 1;
    }
    25% {
        opacity: 1;
    }
    26% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`;

const animateMiddleReverse = keyframes`
    0% {
        opacity: 0;
    }
    74% {
        opacity: 0;
    }
    75% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
    `;

const animateBottom = keyframes`
  0% {
    transform: translateY(0) rotate(0);
  }
  25% {
    transform: translateY(-10px) rotate(0);
  }
  50% {
    transform: translateY(-10px) rotate(45deg);
  }
  100% {
    transform: translateY(-10px) rotate(135deg);
  }
`;

const animateBottomReverse = keyframes`
  0% {
    transform: translateY(-10px) rotate(135deg);
  }
  50% {
    transform: translateY(-10px) rotate(45deg);
  }
  75% {
    transform: translateY(-10px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const Svg = styled.svg`
  width: 80px;
  height: 80px;
`;

export const barStyles = css`
  fill: #ffffff;
`;

export const Top = styled.rect`
  ${barStyles}
  transform-origin: 40px 31.5px;
  ${({ $open }) =>
    $open
      ? css`
          animation: ${animateTop} 0.5s forwards;
        `
      : css`
          animation: ${animateTopReverse} 0.5s forwards;
        `}
`;

export const Middle = styled.rect`
  ${barStyles}
  ${({ $open }) =>
    $open
      ? css`
          animation: ${animateMiddle} 0.5s forwards;
        `
      : css`
          animation: ${animateMiddleReverse} 0.5s forwards;
        `};
`;

export const Bottom = styled.rect`
  ${barStyles}
  transform-origin: 40px 51.5px;
  ${({ $open }) =>
    $open
      ? css`
          animation: ${animateBottom} 0.5s forwards;
        `
      : css`
          animation: ${animateBottomReverse} 0.5s forwards;
        `}
`;
