import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../styles/Header.css';

function Header() {
  const linkActive = ({ isActive }) => (isActive ? 'selected links' : 'links');

  return (
    <header>
      <div className="header">
        <div className="logo__container">
          <img src={Logo} className="logo" alt="logo" />
          <h1 className="logo__title">Space Traveler´s Hub</h1>
        </div>
        <nav>
          <li>
            <NavLink to="/" className={linkActive}>Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/missions" className={linkActive}>Missions</NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={linkActive}>My Profile</NavLink>
          </li>
        </nav>
      </div>
    </header>
  );
}
export default Header;
