import {React, useState} from "react";
import { ClickCounter } from "./ClickCounter";
import { Counter } from "./Counter";
import { HelloWorld } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";
import { ClickTracker } from "./Clicktracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { LoginComponent } from "./LoginComponent";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { TodoList } from "./TodoList";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { Sum } from "./Sum";
import { GithubUser } from "./GithubUser";
import GithubList from "./GithubList";
import {HookForm} from "./HookForm"
import { CarDetails } from "./CarDetails";
import FilteredList from "./FilteredList";

export function App() {
  const [language, setLanguage] = useState("it");

  function handleChangeLanguage(event) {
    setLanguage(event.target.value);
  }
  return (
    <div>
      <Container>
        <h1>Un bandito ti minaccia con un coltello per avere tutti i tuoi denari!</h1>
        <label for="select"> In che lingua lo minacci?</label>
        <select value={language} onChange={handleChangeLanguage} id="select">
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <LanguageContext.Provider value={language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </Container>
    </div>
  );
}
