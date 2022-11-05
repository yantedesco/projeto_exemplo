import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { api } from "../../../api";

export const Cadastro = () => {
  const [cpf, setCPF] = useState("");

  const cadastrar = (e) => {
    e.preventDefault();
    try {
      api.post("/cliente", {});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Adicionar cliente</h1>
      <Form onSubmit={(e) => cadastrar(e)}>
        <Form.Group>
          <Form.Label>CPF</Form.Label>
          <Form.Control
            value={cpf}
            type="text"
            onChange={(e) => {
              setCPF(e.target.value);
            }}
          />
        </Form.Group>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
};
