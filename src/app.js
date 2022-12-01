import {React} from "react";
import { Routes,Route, useNavigate } from "react-router-dom"
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import {Counter } from "./Counter"
import { ShowGithubUser } from "./ShowGithubUser";
import { NotFound } from "./notFound";
import {GithubList} from "./GithubList";
import {GithubUser} from "./GithubUser";

export function App() {
  const navigate = useNavigate();
  function handleDatabaseButtonClick(event) {
    const { value } = event.target;
    navigate(value);
  }
  
  return (
    <div>
      <Container title="My app">
      <div className="linkBar">
            <button onClick={handleDatabaseButtonClick} value="/welcome">Vai alla pagina profilo</button>
            <button onClick={handleDatabaseButtonClick} value="/counter">Vai al contatore clienti</button>
            <button onClick={handleDatabaseButtonClick} value="/users">Vai al database ricercati</button>
      </div>
        <Routes>
          <Route path="/welcome" element={<Welcome name="Guest" />} />
          <Route path="/counter" element={<Counter initialValue={0}/>} />
          <Route path="/users" element={<GithubList  />}>
            <Route path=":username" element={<GithubUser/>}/> 
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        
      </Container>
    </div>
  );
}
