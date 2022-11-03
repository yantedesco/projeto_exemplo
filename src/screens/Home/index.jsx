import { Col, Row } from "react-bootstrap";
import { data } from "../../data/data";
import { CardComponent } from "./components/Card";

export const Home = () => {
  return (
    <>
      <h1>Produtos</h1>
      <Row>
        {data.map((d) => (
          <Col key={d.id} sm={12} md={6} lg={4} xl={3}>
            <CardComponent fotoLink={d.fotoLink} nome={d.nome} valor={d.valor} />
          </Col>
        ))}
      </Row>
    </>
  );
};
