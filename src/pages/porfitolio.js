import React from "react";
import { Container, Row, Col } from "reactstrap";

import { connect } from "react-redux";

class Page extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>Portifolio</Col>
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
