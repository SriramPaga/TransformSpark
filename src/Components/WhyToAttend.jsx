import React from 'react';
import { Reasons } from '../Data/Reasons';
import ReasonCard from './ReasonCard';
import { Container, Row, Col } from 'react-bootstrap';
const WhyToAttend = () => {
  return (
    <Container>
      <Row className="mb-5">
        <h3>Who benefits from attending, and why should you? </h3>
        <h5>
          Feeling overwhelmed by the challenges of leading your Rotaract Club?
          You're not alone! From member engagement to project execution,
          presidents, vice presidents, secretaries, joint secretaries and
          treasurers face a multitude of demands. But fear not, because Rotaract
          ignites the spark that helps you overcome them all!
        </h5>
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
      <Row>
        <h5>With Sparks, you'll transform challenges into opportunities!</h5>
      </Row>
    </Container>
  );
};

export default WhyToAttend;
