import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Counter } from "./Counter";
import { HelloWorld } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";
import {ClickTracker} from "./Clicktracker"
import { InteractiveWelcome } from "./InteractiveWelcome";
import { LoginComponent } from "./LoginComponent";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { TodoList } from "./TodoList";


export class App extends React.Component{
    render(){
        return(
            <div>
                {/* <HelloWorld /> */}
                {/* <Welcome name="John" age={36} /> */}
                {/* <Counter start={32} increment={2} time={800}/> */}
                {/* <br></br>
                <ClickCounter />
                <br></br>
                <ClickTracker />
                <br></br>
                <InteractiveWelcome />
                <p>---Controlled Components form---</p> */}
                <LoginComponent />
                {/* <p>---Uncontrolled Components form---</p>
                <UncontrolledLogin/> */}
                {/* <TodoList /> */}


                           
            </div>
        )

    }
}
