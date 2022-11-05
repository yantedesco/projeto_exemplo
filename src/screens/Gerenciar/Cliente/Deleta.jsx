import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const Deleta = () => {
  const [listaClientes, setListaClientes] = useState([]);
  const [id, setId] = useState();

  return (
    <>
      <h1>Deletar cliente</h1>
      <Form onSubmit={(e) => deletar(e)}>
        <Form.Group>
          <Form.Control as="select" value={id} onChange={(e) => setId(e.target.value)}>
            {listaClientes.map((d) => {
              return (
                <option key={d.id} value={d.id}>
                  {d.nome}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>

        <Button type="submit">Deletar</Button>
      </Form>
    </>
  );
};
