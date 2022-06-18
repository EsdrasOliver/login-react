
import './Enter.css'

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
                </div>
            </div>
        </div>
    )
}