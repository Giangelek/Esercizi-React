import React from "react";
import { HelloWorld } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render(){
        return(
            <div>
                <HelloWorld />
                <Welcome name="John" age={64} />
            </div>
        )

    }
}
