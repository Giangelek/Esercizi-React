import React from "react";
import { HelloWorld } from "./hello";
import { Message } from "./message";
import { Welcome } from "./welcome";

const strongName= <strong>Enzuccio Zappaterra</strong>

export class App extends React.Component{
    render(){
        return(
            <div>
                <HelloWorld />
                <Welcome name={strongName} age={87} />
            </div>
        )

    }
}
