import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { TakeawayData } from '../Data/TakeawayData';
import ReasonCard from './ReasonCard';
const Takeaways = () => {
  return (
    <Container>
      <h3>Major takeaways!</h3>
      <Row className="d-flex justify-content-center">
        {TakeawayData.map((data, index) => {
          return (
            <Col sm={12} md={4} className="d-flex justify-content-center  ">
              <ReasonCard data={data} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Takeaways;
