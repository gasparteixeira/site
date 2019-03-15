import React from "react";
import { Container, Row, Col } from "reactstrap";

import { connect } from "react-redux";

class Page extends React.Component {
  render() {
    return (
      <Container className="vertical-center">
        <Row>
          <Col xs={12}>
            <strong>under construction</strong>
            <p>contact@gasparteixeira.com</p>
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
