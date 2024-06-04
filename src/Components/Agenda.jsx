import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  HeadingText,
  ParagraphText,
  SubHeadingText,
} from '../CustomComponents/CustomText';

import { UnorderedList, ListItem } from '../CustomComponents/CustomComponents';
const Agenda = () => {
  return (
    <Container fluid="md">
      <Row className="mb-5">
        <HeadingText color="white">The Residential Training Agenda</HeadingText>
        <SubHeadingText color="white">
          Unleash Your Inner Rotaract Hero: A Training Beyond Ordinary!
        </SubHeadingText>
        <ParagraphText color="white">
          Get ready for a two-day residential training experience that goes
          beyond just learning! This first-ever District 3192 Training will
          equip you with a powerful blend of:
        </ParagraphText>
      </Row>
      <Row className="d-flex justify-content-center">
        <SubHeadingText>
          SPARK is your helium injection! Here's why you NEED to attend:
        </SubHeadingText>
      </Row>
      <Card
        className="shadow-sm"
        border="light"
        style={{ minWidth: '250px', margin: 20, padding: 15, boxShadow: 12 }}
      >
        <Row>
          <Col className=" col-3 d-flex align-items-center justify-content-center border-end border-1 border-dark  ">
            <SubHeadingText> DAY 1</SubHeadingText>
          </Col>
          <Col className=" col-9 d-flex  align-items-center">
            <UnorderedList>
              <ListItem>
                Unleash Your Inner Superhero: No capes required, but you'll
                discover the power to tackle any Rotaract challenge.
              </ListItem>
              <ListItem>
                Mastermind Missions: Breakout sessions that transform you from a
                lone Rotaract warrior to a skilled service crusader.
              </ListItem>
              <ListItem>
                Epic Dance Party: Unleash your inner party animal (responsibly,
                of course) at the legendary Rotaract DJ Night.
              </ListItem>
            </UnorderedList>
          </Col>
        </Row>
      </Card>
      <Card
        className="shadow-sm"
        border="light"
        style={{ minWidth: '250px', margin: 20, padding: 15, boxShadow: 5 }}
      >
        <Row>
          <Col className="col-3 d-flex align-items-center justify-content-center border-end border-1 border-dark ">
            <SubHeadingText> DAY 2</SubHeadingText>
          </Col>
          <Col className="col-9 d-flex align-items-center ">
            <UnorderedList>
              <ListItem>
                Laughter is the Best Medicine: Start Day 2 with Laughter Yoga –
                the most fun way to boost focus and connection.
              </ListItem>
              <ListItem>
                Level Up Your Leadership: Learn from inspiring Rotarian leaders
                and fellow heroes, crafting a personalized action plan to
                conquer your club goals.
              </ListItem>
              <ListItem>
                Get the inside scoop on the latest Rotaract District initiatives
                straight from the source.
              </ListItem>
            </UnorderedList>
          </Col>
        </Row>
      </Card>
      <Row className="mt-3">
        <ParagraphText>
          Don't miss out! SPARK is more than just a training – it's an adventure
          that will ignite your passion for Rotaract and equip you to make a
          real difference. See you there, fellow Rotaract Superhero!
        </ParagraphText>
      </Row>
    </Container>
  );
};

export default Agenda;
