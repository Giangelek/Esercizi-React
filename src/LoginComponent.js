import React from "react"

export class LoginComponent extends React.Component {
    state={
        username:"",
        password:"",
        remember:false,
        disabled:true,
    }

    handleInputChange= (event) =>{
        const value = event.target.value
        const name = event.target.name    
        const type = event.target.type
        const checked = event.target.checked
        const disabled= event.target.disabled
  
        this.setState({ [name]: type === 'checkbox' ? checked : value, })
        this.setState({ [name]: type === "button" ? disabled : value, disabled: value !== "" ? false : true })
        

        // così non può funzionare?
        //this.setState({ [name]: type === "button" ? disabled : value, disabled: (this.state.username !== "" || this.state.password !== "") 
        // ? false : true });
    }

    onLogin= (event) =>{
        const username= this.state.username
        const password= this.state.password
        const remember= this.state.remember

        console.log({
            username,
            password,
            remember
        })
    }

    

    onReset= (event) => {
        this.setState({
            username: "",
            password: "",
            remember: false,
            loginDisabled: true
        })
    }


    render() { 
        return (
            
            <div>
                <p>Prego inserisca i suoi codici d'accesso:</p>
                <label>Grado</label>
                <input name="username" value={this.state.username} onChange={this.handleInputChange} on />
                <br/>
                <label>Codice</label><input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                <br/>
                <label>Ricorda</label><input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} />
                <button name="login" type="button" style={{backgroundColor: this.state.password.length < 8 ? "red" : " green"}} disabled={this.state.disabled} onChange={this.handleInputChange} onClick={this.onLogin}>Login</button>
                <button name="Reset" type="button"disabled={this.state.disabled} onChange={this.handleInputChange} onClick={this.onReset}>Reset</button>
            </div>
        )
    }
}   

