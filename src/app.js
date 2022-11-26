import React from "react";
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

export class App extends React.Component {
    state= {
        language: "en",
    }

    handleLanguageChange = (event) =>{
        this.setState({language: event.target.value})
    }

  render() {
    return (
      <Container>
        <p>Oh prode cavaliere, quale lingua voi parlate?</p>
        <div>
          <select
            value={this.state.language}
            onChange={this.handleLanguageChange}
            
          >
            <option value={"en"}>Saxọ̄̆nlī - english</option>
            <option value={"it"}>Volgare - italiano</option>
          </select>
        </div>
        <LanguageContext.Provider value={this.state.language}>

          <DisplayLanguage />

        </LanguageContext.Provider>
      </Container>
    );
  }
}
