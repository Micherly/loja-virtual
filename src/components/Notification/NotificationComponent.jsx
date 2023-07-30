import { Alert, Col } from "react-bootstrap";
import { createPortal } from "react-dom";
import "./style.css";

export const NotificationComponent = ({ variant = "success", message }) => {
  return createPortal(
    <Col className="notification">
      <Alert variant={variant}>
        <p>{message}</p>
      </Alert>
    </Col>,
    document.body
  );
};
