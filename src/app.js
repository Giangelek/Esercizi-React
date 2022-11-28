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
import { Sum } from "./Sum";

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
        <Sum numbers={[32,44,55,922]} object={"fumetti"}/>
      </Container>
    );
  }
}
