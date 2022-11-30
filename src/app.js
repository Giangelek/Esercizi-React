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
import { GithubUser } from "./GithubUser";
import GithubList from "./GithubList";
import {HookForm} from "./HookForm"

export class App extends React.Component {
  render() {
    return (
      <Container>
        <GithubUser username="giangelek" />
      </Container>
    );
  }
}
