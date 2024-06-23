
import { Link } from 'react-router-dom';
import './navbar.css'
import '../../App.css';

function Navbar() {
  return (
    <>
     <nav className="navbar desktop">
      <div className="container-fluid" style={{ padding: '5px 35px' }}>
        <a className="navbar-brand">Zhagaram</a>
        <div className="d-flex" role="search">
          <div className="desktop-links">
            <span><Link className='a' to="/">Home</Link></span>
            <span><Link className='a' to="/aboutUs">About Us</Link></span>
            <span><Link className='a' to="/suggestion">Suggestion</Link></span>
            <span><Link className='a' to="/studentsProfile">Students Profile</Link></span>
            <span><Link className='a' to="/learnings">Learnings</Link></span>
          </div>
          <button className="btn login-btn" type="submit">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </nav>


<div className="mobile-wrapper">
      <div className="mobile-container">
        <div className="content">
          <nav>
            <span>Zhagaram</span>
            {/* Use state to control checkbox for hamburger menu */}
            <input type="checkbox" id="hamburger1" />
            <label htmlFor="hamburger1"></label>

            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutUs">About us</Link></li>
              <li><Link to="/suggestion">Suggestion</Link></li>
              <li><Link to="/studentsProfile">Students Profile</Link></li>
              <li><Link to="/learnings">Learnings</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Navbar;
