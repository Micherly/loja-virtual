import { Button, Card, Badge } from "react-bootstrap";
import { ButtonLoadingComponent } from "../Button/ButtonLoadingComponent";

export const CardComponent = ({
  title,
  text,
  emphasis,
  image,
  alt,
  button,
}) => {
  return (
    <Card as="article" className="h-100">
      <Card.Img src={image} alt={alt} />

      <Card.Body className="text-center">
        <Card.Title>
          <Badge bg="secondary">{emphasis} </Badge>
        </Card.Title>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        <ButtonLoadingComponent {...button} />
      </Card.Footer>
    </Card>
  );
};
