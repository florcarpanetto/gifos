
import './Button.css';

function Button({message, onClick, disabled}) {
    
    return (
        <button onClick={onClick} disabled={disabled}>{message}</button>
    );
}

export default Button;
