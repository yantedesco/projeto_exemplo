import { useContext, useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CardComponent } from "./components/Card";
import { DataContext } from "../../context/data";
import { api } from "../../api";

export const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const { nome, handleSetNome } = useContext(DataContext);

  useEffect(() => {
    const getDados = async () => {
      try {
        const response = await api.get("/produto");
        console.log(response);
        setProdutos(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getDados();
  }, []);

  console.log(produtos);

  return (
    <main className="py-3">
      <Container>
        {/* <h1>{nome}</h1> */}
        <label>
          Nome:
          <input value={nome} onChange={(e) => handleSetNome(e)} />
        </label>
        <h2>Produtos</h2>
        <Row>
          {produtos.map((d) => (
            <Col key={d.id} sm={12} md={6} lg={4} xl={3}>
              <CardComponent id={d.id} fotoLink={d.fotoLink} nome={d.nome} valor={d.valor} />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};
