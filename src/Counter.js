import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
    state ={
        count : this.props.start,
    }

    componentDidMount(){
        setInterval(() =>{
            this.setState({count: this.state.count + this.props.increment})
        },this.props.time )
    }

    //immagino che il costruttore non serva poichè componentDidMount esegue l'operazione dopo che il suo component di riferimento viene
    //renderizzato

    render(){
        return(
            <CounterDisplay count={this.state.count} />
        )
    }
}