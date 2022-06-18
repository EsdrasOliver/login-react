import { Link } from 'react-router-dom'

import './Register.css'
import imagemCadastro from '../assets/imagemCadastro.jpg'

import { Button } from '../components/Button'
import { useState } from 'react'

export function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    function verificaRegistro() {
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let confirm = document.getElementById('confirm').value

        if(confirm !== password) {
            alert('Senhas diferentes')
        }

        const verificadEmail = /\w@gmail.com/

        if((email || password) === "") {
            alert('Login invalido. Volte a logar ou cadastre')
        } 
        if(verificadEmail.test(email) !== true) {
            alert('Login invalido. Digite um email')
        }
    }

    return (
        <div className="background">
            <div className="container">

                <div className="container-register">

                    <h1>
                        Faça o seu cadastro
                    </h1>

                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Digite seu email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
            
                    
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Digite sua senha" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    
                    <input 
                        type="password" 
                        id="confirm" 
                        placeholder="Digite novamente sua senha" 
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        required
                    />
                    
                    <div className="logar">
                        <Link to="/Enter">
                            <button 
                                type="button" 
                                class="btn btn-success"
                                onClick={verificaRegistro}
                            >
                                Cadastrar
                            </button>
                        </Link>
                        
                        <Link to="/">
                            <Button nome="Login"></Button>
                        </Link>
                    </div>

                </div>

                <div className="art-register">
                    <img src={imagemCadastro} alt="Foto de cadastro" />
                </div>
            </div>
        </div>
    )
}