import { Home } from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetalheProduto } from "./screens/DetalheProduto";
import { Context } from "./context/data";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<DetalheProduto />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
