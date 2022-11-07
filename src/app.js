import React from "react";
import { HelloWorld } from "./hello";
import { Welcome } from "./welcome";

export class App extends React.Component{
    render(){
        return(
            <div>
                <HelloWorld />
                <Welcome name="Enzuccio" />
            </div>
        )

    }
}