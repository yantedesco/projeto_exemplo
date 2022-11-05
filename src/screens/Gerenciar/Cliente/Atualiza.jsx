import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const Atualiza = () => {
  const [listaClientes, setListaClientes] = useState([]);
  const [id, setId] = useState();

  return (
    <>
      <h1>Atualizar cliente</h1>
      <Form onSubmit={(e) => atualizar(e)}>
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
        <Button type="submit">Atualizar</Button>
      </Form>
    </>
  );
};
