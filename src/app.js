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
import { CarDetails } from "./CarDetails";
import FilteredList from "./FilteredList";

export function App() {
    const users = [
      {
        name: "Peppe da Brescia",
        id: 2,
        age: 17,
      },
      {
        name: "Green Goblin",
        id: 1,
        age: 60,
      },
      {
        name: "Red Hulk",
        id: 2,
        age: 75,
      },
      {
        name: "Pete Vaso di colla",
        id: 3,
        age: 16,
      },
      {
        name: "A-Bomb",
        id: 4,
        age: 19,
      },
      {
        name: "Thanos",
        id: 1,
        age: 60,
      },
      {
        name: "Il collezionista",
        id: 2,
        age: 1000000000,
      },
      {
        name: "Loki",
        id: 3,
        age: 680,
      },
      {
        name: "Il capo",
        id: 4,
        age: 50,
      },
      {
        name: "Il soldato d'inverno",
        id: 1,
        age: 35,
      },
      {
        name: "Ana Kravinoff",
        id: 2,
        age: 17,
      },
      {
        name: "La pulce",
        id: 3,
        age: 12,
      },
      {
        name: "Deadpool",
        id: 4,
        age: 37,
      },
    ];

      return(
        <div>
          <Container>
            <FilteredList users={users}/>
          </Container>
        </div>
      )
    }
