import { createContext, useState } from "react";

const estadoContexto = {
  nome: "Yan"
};

export const DataContext = createContext(null);

export const Context = (props) => {
  const [nome, setNome] = useState(estadoContexto);

  const handleSetNome = (e) => {
    setNome(e.target.value);
  };

  return (
    <DataContext.Provider value={{ nome, handleSetNome }}>{props.children}</DataContext.Provider>
  );
};
