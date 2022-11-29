import React, { useState } from "react"


export function LoginComponent(){
    const [loginData, setLoginData] = useState({
        username:"",
        password:"",
        remember:false,
    })
    

    function handleInputChange(event) {
        const { value, name, disabled, checked, type } = event.target;
    
        setLoginData({
            ...loginData,
          [name]: type === "checkbox" ? checked : value,
          [name]: type === "button" ? disabled : value,
        });
    }

    function onLogin(event){
        console.log(loginData)
    }

    

    function onReset(event){
        setLoginData({
            username: "",
            password: "",
            remember: false,
            
        })
    }


     
    return (
            <div>
                <p>Prego inserisca i suoi codici d'accesso:</p>
                <label>Grado</label>
                <input name="username" value={loginData.username} defaultValue={loginData.username} onChange={handleInputChange} on />
                <br/>
                <label>Codice</label><input name="password" type="password" value={loginData.password} defaultValue={loginData.password} onChange={handleInputChange} />
                <br/>
                <label>Ricorda</label><input name="remember" type="checkbox" checked={loginData.remember} onChange={handleInputChange} />
                <button name="login" type="button" onChange={handleInputChange} onClick={onLogin}>Login</button>
                <button name="Reset" type="button" onChange={handleInputChange} onClick={onReset}>Reset</button>
            </div>
    )    
    
}   

