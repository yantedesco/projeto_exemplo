import { Home } from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetalheProduto } from "./screens/DetalheProduto";
import { Context } from "./context/data";
import { Gerenciar } from "./screens/Gerenciar";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<DetalheProduto />} />
          <Route path="/gerenciar-clientes" element={<Gerenciar />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
