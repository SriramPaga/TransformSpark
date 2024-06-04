import React from 'react';
import { Reasons } from '../Data/Reasons';
import ReasonCard from './ReasonCard';
import { Container, Row, Col } from 'react-bootstrap';
import { HeadingText, ParagraphText } from '../CustomComponents/CustomText';
const WhyToAttend = () => {
  return (
    <Container>
      <Row className="mb-5">
        <HeadingText color="white">
          Who benefits from attending, and why should you?{' '}
        </HeadingText>
        <ParagraphText color="white">
          Feeling overwhelmed by the challenges of leading your Rotaract Club?
          You're not alone! From member engagement to project execution,
          presidents, vice presidents, secretaries, joint secretaries and
          treasurers face a multitude of demands. But fear not, because Rotaract
          ignites the spark that helps you overcome them all!
        </ParagraphText>
      </Row>
      <Row className="d-flex justify-content-center">
        {Reasons.map((data, index) => {
          return (
            <Col sm={12} md={'auto'} className="d-flex justify-content-center">
              <ReasonCard data={data} />
            </Col>
          );
        })}
      </Row>
      <Row className='mt-3'>
        <ParagraphText color="white">
          With Sparks, you'll transform challenges into opportunities!
        </ParagraphText>
      </Row>
    </Container>
  );
};

export default WhyToAttend;
