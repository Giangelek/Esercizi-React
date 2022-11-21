import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Counter } from "./Counter";
import { HelloWorld } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";
import {ClickTracker} from "./Clicktracker"


export class App extends React.Component{
    render(){
        return(
            <div>
                <HelloWorld />
                <Welcome name="John" age={12} />
                <Counter start={32} increment={2} time={800}/>
                <br></br>
                <ClickCounter />
                <br></br>
                <ClickTracker />
                
            </div>
        )

    }
}
