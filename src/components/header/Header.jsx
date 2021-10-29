import Button from '../button/Button';
import { useContext } from 'react/cjs/react.development';
import './Header.css';
import logo from "../../assets/logo-desktop.svg"
import { IsDarkContext } from '../../contexts/IsDarkContext';

function Header() {
  const {isDark, setIsDark} = useContext(IsDarkContext);
  console.log(isDark)
return (
    <div className="Header">
      <img src={logo} alt="logo giphos"/>
      <Button message={`MODO ${isDark ? ' LIGHT' : ' DARK'}`} onClick={()=>{setIsDark(!isDark)}}/>
      
    </div>
  );
}

export default Header;