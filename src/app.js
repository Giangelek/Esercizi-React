import {React} from "react";
import { Routes,Route } from "react-router-dom"
import { Welcome } from "./Welcome";
import { Container } from "./Container";

export function App() {
  
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<Welcome name="Peppino" age={75} />} />
        </Routes>
      </Container>
    </div>
  );
}
