import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Landing.css';

const Landing = () => {
  return (
    <div className="Landing mt-4">
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="pt-5 pb-4">Landing.js</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae cumque laudantium ducimus dicta mollitia consequatur
              maiores expedita sed, quis fugit, distinctio officiis eaque
              assumenda. Minima consequuntur beatae quos expedita optio!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
