import { Card } from "react-bootstrap";

export const CardComponent = (props) => {
  return (
    <Card className="my-3 rounded">
      <Card.Img src={props.fotoLink} height={200} width={200} />
      <Card.Body>
        <Card.Title>{props.nome}</Card.Title>
        <Card.Text>{props.valor}</Card.Text>
      </Card.Body>
    </Card>
  );
};
