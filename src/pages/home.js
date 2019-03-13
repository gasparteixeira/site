import React from "react";
import { Container, Row, Col } from "reactstrap";

import { connect } from "react-redux";

class Page extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={6} sm={12}>
            Coluna 1
          </Col>
          <Col md={6} sm={12}>
            Coluna 2
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  load: state.load
});

export default connect(
  mapStateToProps,
  {}
)(Page);
