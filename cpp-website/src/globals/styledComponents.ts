import styled from '@emotion/styled';

import { Text, Heading } from '@chakra-ui/react';

const UnderlinedText = styled(Text)`
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: ${props => props.thickness ? `${props.thickness}${typeof props.thickness === "number" ? 'px' : ''}` : "4px"};
    border-radius: ${props => props.thickness ? `${props.thickness}${typeof props.thickness === "number" ? 'px' : ''}` : "4px"};
    background-color: ${props => props.linecolor || props.color || "black"};
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }
  &:hover:before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

const UnderlinedHeading = styled(Heading)`
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: ${props => props.thickness ? `${props.thickness}${typeof props.thickness === "number" ? 'px' : ''}` : "4px"};
    border-radius: ${props => props.thickness ? `${props.thickness}${typeof props.thickness === "number" ? 'px' : ''}` : "4px"};
    background-color: ${props => props.linecolor || props.color || "black"};
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }

  &:hover:before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

export {UnderlinedText, UnderlinedHeading}
