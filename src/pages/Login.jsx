import { Link } from 'react-router-dom'

import './Login.css'
import imagemLogin from '../assets/imagemLogin.jpg'

import { Button } from '../components/Button'
import { useState } from 'react'

export function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function verificaConta() {
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value

        const verificadEmail = /\w@gmail.com/

        if((email || password) == "") {
            alert('Login invalido. Volte a logar ou cadastre')
        } else if(verificadEmail.test(email) !== true) {
            alert('Login invalido. Digite um email')
        }
    }

    return (
        <div className="background">
            <div className="container">

                <div className="art">
                    <img src={imagemLogin} alt="Foto de login" />
                </div>

                <div className="container-login">

                    <h1>
                        Olá! <br/>
                        Seja bem vindo.
                    </h1>
                    <h4>Faça o seu login</h4>

                    <input
                        type="email" 
                        id="email" 
                        placeholder="Digite seu email" 
                        value={email.value}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
            
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Digite sua senha" 
                        value={password.value}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    
                    <div className="logar">
                        <Link to="/Enter">
                            <button 
                                type="button" 
                                class="btn btn-success"
                                onClick={verificaConta}
                            >
                                Entrar
                            </button>
                        </Link>
                        
                        <Link to="/Register">
                            <Button nome="Cadastrar"></Button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}