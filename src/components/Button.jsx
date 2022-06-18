import './Button.css'

export function Button({ nome }) {
    return (
        <button type="button" class="btn btn-success">{nome}</button>
    )
}