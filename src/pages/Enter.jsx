
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'
import './Enter.css'

const deleteUser = () => {
    const getUser = localStorage.getItem("user")
    const userObject = JSON.parse(getUser)

    localStorage.clear()

    console.log('excluido');
}

export function Enter() {

    return (
        <div className="background">
            <div className="container-enter">
                <h1>Sua conta</h1> 
                
                <div>
                    <p>
                        Email: {email.value}
                    </p>
                    <p>
                        Senha: {password.value} 
                    </p>
                    <Link to="/">
                        <Button
                            type="button" 
                            class="btn btn-success"
                            onClick={deleteUser}
                            nome="Logout"
                        >
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}