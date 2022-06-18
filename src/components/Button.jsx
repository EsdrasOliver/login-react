
import './Button.css'

export function Button(props) {
    return (
        <button 
            type={props.type} 
            className={props.class}
            onClick={props.onClick}
        >
            {props.nome}
        </button>
    )
}