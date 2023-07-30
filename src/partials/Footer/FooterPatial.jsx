import { Container, Row, Col } from "react-bootstrap";

export const FooterPartial = () => {
  return (
    <Container
      as={"footer"}
      className="position-absolute bottom-0 p-3 bg-dark text-light"
      fluid
    >
      <Row>
        <Col className="text-center">
          <h6>AnimaBox&#169; 2023</h6>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <small className="text-secondary">By Micherly Almeida</small>
          <a
            className="m-2"
            href="https://www.linkedin.com/in/micherly-almeida/"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a className="m-2" href="https://github.com/Micherly" target="_blank">
            <i className="bi bi-github"></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
};
