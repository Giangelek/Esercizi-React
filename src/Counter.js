import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
    state ={
        count : this.props.start,
    }

    constructor(props){
        super(props)
        setInterval(() =>{
            this.setState({count: this.state.count + this.props.increment})
        },this.props.time )
    }

    render(){
        return(
            <CounterDisplay count={this.state.count} />
        )
    }
}