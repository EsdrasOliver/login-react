import { Link } from 'react-router-dom'

import './Login.css'
import imagemLogin from '../assets/imagemLogin.png'
import close from '../assets/close.png'
import open from '../assets/open.jpg'

import { Button } from '../components/Button'
import { useState } from 'react'

export function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function verificaConta() {
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value

        const verificadEmail = /\w@gmail.com/

        if((email && password) == "") {
            alert('Login invalido. Volte a logar ou cadastre')
        } else if(verificadEmail.test(email) !== true) {
            alert('Login invalido. Digite um email')
        }
    }

    const addUser = () => {
        const user = {
            email,
            password
        }

        localStorage.setItem('user', JSON.stringify(user))

        const getUser = localStorage.getItem('user')

        const userObject = JSON.parse(getUser)
    }

    function handleSubmit(e) {
        e.preventDefault()

        console.log("Enviou")
    }

    function eyeClick() {
        const  passwordInput =document.getElementById("password")
        const eyeIcon = document.getElementById("eyeIcon")

        let inputTypeIsPassword = passwordInput.type == "password"

        if(inputTypeIsPassword) {
            showPassword()
        } else {
            hidePassword()
        }

        function showPassword() {
            passwordInput.setAttribute("type", "text")
            eyeIcon.setAttribute("src", `${close}`)
        }

        function hidePassword() {
            passwordInput.setAttribute("type", "password")
            eyeIcon.setAttribute("src", `${open}`)
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

                    <form className='container-login' onSubmit={handleSubmit}>
                        <input
                            type="email" 
                            id="email" 
                            placeholder="Digite seu email" 
                            value={email.value}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                
                        <div className="inputPassword">
                            <input
                                type="password" 
                                id="password" 
                                placeholder="Digite sua senha" 
                                value={password.value}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            >
                            </input> 
                            {password && (
                                <img src={`${close}`} onClick={eyeClick} id="eyeIcon" width="20px" />
                            )}
                        </div>
                        
                        <div className="logar">
                            <Link to="/Enter">
                                <Button
                                    type="submit" 
                                    class="btn btn-success"
                                    onClick={verificaConta && addUser}
                                    nome="Entrar"
                                >
                                    <input type="submit" />
                                </Button>
                            </Link>
                            
                            <Link to="/Register">
                                <Button
                                    type="submit" 
                                    class="btn btn-success"
                                    nome="Cadastrar"
                                ></Button>
                            </Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}