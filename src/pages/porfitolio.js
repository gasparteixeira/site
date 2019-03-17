import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Page extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            Portifolio
            <Link to="/404">404</Link>
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
