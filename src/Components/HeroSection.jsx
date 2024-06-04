import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

import {
  HeadingText,
  ParagraphText,
  SubHeadingText,
} from '../CustomComponents/CustomText';

import Image from '../Images/SparkImg.png';
import { styled } from 'styled-components';

const CustomeImage = styled.img`
  max-width: 500px;
  height: 100%;
  @media screen and (max-width: 450px) {
    width: 250px;
    height: 250px;
  }
`;

const HeroSection = () => {
  return (
    <Container
      fluid="md"
      // className="d-flex  align-items-center justify-content-md-center"
      // style={{ minHeight: '100vh' }}
    >
      <Row>
        <Col sm={12} md={6}>
          <CustomeImage src={Image} />
        </Col>
        <Col sm={12} md={6}>
          <Row className="mb-5">
            <HeadingText>Spark: Transform Leaders Training</HeadingText>
          </Row>
          <Row>
            <ParagraphText>Get ready to shine with SPARK!</ParagraphText>
          </Row>
          <Row>
            <SubHeadingText>
              Are you passionate about Rotaract? Do you want to learn more? Then
              mark your calendars for SPARK, taking place on 8th and 9th June
              2024 at Dayanand Sagar University on the first day and at Adithya
              Gardens on the second day. This exciting event will feature
              training, networking and a lot of fun!
            </SubHeadingText>
          </Row>

          <Button
            style={{
              marginTop: '50px',
              maxWidth: '300px',
            }}
            href="https://forms.gle/61adCfSh1ZxM9HGP7 "
            target="_blank"
          >
            Register Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
