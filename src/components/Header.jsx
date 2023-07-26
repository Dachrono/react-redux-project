import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <div className="header">
        <div className="logo__container">
          <img src={Logo} className="logo" alt="logo" />
          <h1 className="logo__title">Space Traveler´s Hub</h1>
        </div>
        <nav>
          <li>
            <NavLink to="">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="">Missions</NavLink>
          </li>
          <li>
            <NavLink to="">My Profile</NavLink>
          </li>
        </nav>
      </div>
    </header>
  );
}
export default Header;
