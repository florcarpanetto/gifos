import Button from '../button/Button';
import { useContext } from 'react/cjs/react.development';
import './Header.css';
import logo from "../../assets/logo-desktop.svg";
import logoDark from "../../assets/logo-mobile-modo-noct.svg";
import { IsDarkContext } from '../../contexts/IsDarkContext';

function Header() {
  const {isDark, setIsDark} = useContext(IsDarkContext);
  console.log(isDark)
return (
    <div className="Header">
      <img className="logo-gifos" src={isDark? logoDark : logo} alt="logo giphos"/>
      <Button className={`btn ${isDark ? 'dark' : 'light'}`} message={`MODO ${isDark ? ' LIGHT' : ' DARK'}`} onClick={()=>{setIsDark(!isDark)}}/>
      
    </div>
  );
}

export default Header;