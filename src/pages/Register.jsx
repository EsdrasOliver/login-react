import { Link } from 'react-router-dom'

import './Register.css'
import imagemCadastro from '../assets/imagemCadastro.png'
import close from '../assets/close.png'
import open from '../assets/open.jpg'

import { Button } from '../components/Button'
import { useState } from 'react'

export function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

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

    function eyeConfirmClick() {
        const confirmInput = document.getElementById("confirm")
        const eyeConfirmIcon = document.getElementById("eyeConfirmIcon")

        let inputTypeIsConfirm = confirmInput.type == "password"

        if(inputTypeIsConfirm) {
            showConfirm()
        } else {
            hideConfirm()
        }

        function showConfirm() {
            confirmInput.setAttribute("type", "text")
            eyeConfirmIcon.setAttribute("src", `${close}`)
        }
        function hideConfirm() {
            confirmInput.setAttribute("type", "password")
            eyeConfirmIcon.setAttribute("src", `${open}`)
        }
    }

    function verificaRegistro() {
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let confirm = document.getElementById('confirm').value
        let validated = false

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
        validated = true
        if(validated === true) {
            addUser()
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    const addUser = () => {
        const user = {
            email,
            password
        }

        localStorage.setItem('user', JSON.stringify(user))

        const getUser = localStorage.getItem('user')

        const userObject = JSON.parse(getUser)

        console.log(userObject.email);
        console.log(userObject.password);
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
                
                        <div className="inputPassword">
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="Digite sua senha" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {password && (
                                <img src={`${close}`} onClick={eyeClick} id="eyeIcon" width="20px" />
                            )}
                        
                        </div>
                        
                        <div className="inputPassword">
                            <input 
                                type="password" 
                                id="confirm" 
                                placeholder="Digite novamente sua senha" 
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                                required
                            />
                            {confirm && (
                                <img src={`${close}`} onClick={eyeConfirmClick} id="eyeConfirmIcon" width="20px" />
                            )}
                        </div>
                        
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