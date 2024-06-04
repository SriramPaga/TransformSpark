import React from 'react';
import styled from 'styled-components';

export const HeadingText = styled.h1`
  font-size: 54px;
  color: ${(props) => props.color};
  @media screen and (max-width: 440px) {
    font-size: x-large;
  }
`;
export const SubHeadingText = styled.h4`
  font-size: 27px;
  color: ${(props) => props.color};
  @media screen and (max-width: 440px) {
    font-size: 24px;
  }
`;

export const ParagraphText = styled.h6`
  font-size: larger;
  color: ${(props) => props.color};
  @media screen and (max-width: 440px) {
    font-size: large;
  }
`;
