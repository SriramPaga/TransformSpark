import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import {
  Audio,
  BallTriangle,
  Bars,
  Circles,
  Grid,
  Hearts,
  Oval,
  Puff,
  Rings,
  SpinningCircles,
  TailSpin,
  ThreeDots,
} from 'react-loading-icons';
const LoadingPage = () => {
  return (
    <Container
      style={{
        minHeight: 800,
      }}
      className="d-flex justify-content-center align-items-center flex-column"
    >
      {/* <BallTriangle /> */}
      <Circles />
      {/* <Grid fill="#ffffff" /> */}
      {/* <ThreeDots /> */}
      <Row
        className="mt-5 "
        style={{
          color: 'white',
        }}
      >
        <h2>Let! Us! Cook!!!</h2>
      </Row>
      <Row className="mt-5">
        <div
          style={{
            color: 'white',
          }}
        >
          <h3>Until then!</h3>
        </div>
        <Button
          href="/Spark"
          style={{
            backgroundColor: '#F42A3F',
            border: 'none',
            padding: 15,
            margin: 10,
          }}
        >
          Register For Spark
        </Button>
      </Row>
    </Container>
  );
};

export default LoadingPage;
