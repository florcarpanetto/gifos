import './Button.css';
import { useContext } from 'react';
import { IsDarkContext } from '../../contexts/IsDarkContext';

function Button({message, onClick, disabled, className, children}) {
    const {isDark, setIsDark} = useContext(IsDarkContext);
    return (
        <button className={className} onClick={onClick} disabled={disabled}>{message}{children}</button>
    );
}

export default Button;
