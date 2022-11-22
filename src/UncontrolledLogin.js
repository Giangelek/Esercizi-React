import React from "react";

export class UncontrolledLogin extends React.Component {
    state={
        disabled:true,
        formValue:{
            username:"",
            password:"",
        },
    }

    handleFormLogin = (event) => {
        event.preventDefault();
    
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const remember = event.target.elements.remember.checked;
    
        console.log({
          username,
          password,
          remember,
        });
    };

    handleFormReset= (event) =>{
        event.target.reset();

    };

    handleChange= (event) =>{
        console.log(this.state.formValue)
        this.setState({setValue:{[event.target.name]: event.target.value}})
        if(this.state.formValue.username !== "" && this.state.formValue.password !==""){
            this.setState({disabled : false})
        } else {
            this.setState({disabled : true})
        }
    }

    render() {
        return (
        <div>
            <p>Prego inserisca i suoi codici d'accesso:</p>
            <form onSubmit={this.handleFormLogin} onReset={this.handleFormReset} onChange={this.handleChange}>
                <label>Username</label>
                <input name="username" autoFocus />
                <br/>
                <label>Password</label>
                <input name="password" type="password" />
                <br/>
                <label>Ricorda</label>
                <input name="remember" type="checkbox"/>
                <br/>
                <button type="submit" disabled={this.state.disabled} >Login</button>
                <button type="reset" disabled={this.state.disabled}>Reset</button>
            </form>
        </div>)
    }
}
