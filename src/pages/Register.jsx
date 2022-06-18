import { Link } from 'react-router-dom'

import './Register.css'
import imagemCadastro from '../assets/imagemCadastro.jpg'

import { Button } from '../components/Button'
import { useState } from 'react'

export function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    async function verificaRegistro() {
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

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div className="background">
            <div className="container">

                <div className="container-register">

                    <h1>
                        Faça o seu cadastro
                    </h1>

                    <form className='container-login' onSubmit={handleSubmit}>
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
                                <Button
                                    type="button" 
                                    class="btn btn-success"
                                    onClick={verificaRegistro}
                                    nome="Registrar"
                                >

                                </Button>
                            </Link>
                            
                            <Link to="/">
                                <Button 
                                    type="button" 
                                    class="btn btn-success"
                                    nome="Voltar"
                                ></Button>
                            </Link>
                        </div>

                    </form>

                </div>

                <div className="art-register">
                    <img src={imagemCadastro} alt="Foto de cadastro" />
                </div>
            </div>
        </div>
    )
}