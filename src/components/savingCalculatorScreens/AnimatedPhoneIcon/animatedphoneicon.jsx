import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaPhoneVolume } from 'react-icons/fa';

// Define the ringing animation
const ringAnimation = keyframes`
0% {
    transform: translateX(10px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateX(10px);
  }
`;

// Apply the animation to the styled PhoneIcon
const AnimatedPhoneIcon = styled(FaPhoneVolume)`
  animation: ${ringAnimation} 1s infinite;
`;

const PhoneIcon = () => {
  return <AnimatedPhoneIcon size={70} style={{ color: "#05c8e8", marginLeft: "9rem" }}/>;
};

export default PhoneIcon;