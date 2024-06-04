import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { TakeawayData } from '../Data/TakeawayData';
import ReasonCard from './ReasonCard';
import { HeadingText } from '../CustomComponents/CustomText';
const Takeaways = () => {
  return (
    <Container>
      <Row className="mb-5">
        <HeadingText color="white">Major Takeaways!</HeadingText>
      </Row>
      <Row className="d-flex justify-content-center">
        {TakeawayData.map((data, index) => {
          return (
            <Col
              key={index}
              sm={12}
              md={4}
              className="d-flex justify-content-center g-3"
            >
              <ReasonCard data={data} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Takeaways;
