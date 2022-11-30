import {React} from "react";
import { Routes,Route } from "react-router-dom"
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import {Counter } from "./Counter"

export function App() {
  
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<Welcome name="Peppino" age={75} />} />
          <Route path="counter" element={<Counter initialValue={0}/>} />
        </Routes>
      </Container>
    </div>
  );
}
