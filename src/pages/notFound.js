import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const NotFound = location => (
  <Container className="vertical-center">
    <Row>
      <Col xs={12}>
        <strong>
          No match for <code>{location.pathname}</code>
        </strong>
        <p>
          <Link to="/">Return to home page</Link>
        </p>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
