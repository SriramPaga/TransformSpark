import React from 'react';
import styled from 'styled-components';

export const HeadingText = styled.h1`
  font-size: 54px;
  @media screen and (max-width: 440px) {
    font-size: x-large;
  }
`;

export const ParagraphText = styled.h6`
  font-size: x-large;
  @media screen and (max-width: 440px) {
    font-size: large;
  }
`;

export const SubHeadingText = styled.h4`
  font-size: small;
  @media screen and (max-width: 440px) {
    font-size: x-small;
  }
`;
