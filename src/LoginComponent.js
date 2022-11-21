import React from "react"

export class LoginComponent extends React.Component {
    state={
        username:"",
        password:"",
        remember:"",
    }

    handleInputChange= (event) =>{
        const value = event.target.value
        const name = event.target.name    
        const type = event.target.type
        const checked = event.target.checked
  
        this.setState({ [name]:  type === 'checkbox' ? checked : value, })
    }

    render() { 
        return (
            
            <div>
                <p>Prego inserisca i suoi codici d'accesso:</p>
                <label>Grado</label>
                <input name="username" value={this.state.username} onChange={this.handleInputChange} />
                <br/>
                <label>Codice</label><input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
                <br/>
                <label>Ricorda</label><input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputChange} />
            </div>
        )
    }
}   