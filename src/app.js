import React from "react";
import { HelloWorld } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

const strongName= <strong>Enzuccio Zappaterra</strong>

export class App extends React.Component{
    render(){
        return(
            <div>
                <HelloWorld />
                <Welcome name={strongName} age={64} />
            </div>
        )

    }
}
