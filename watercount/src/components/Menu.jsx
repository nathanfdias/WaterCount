import { Link } from 'react-router-dom';
import '../styles/menu.css';

const Menu = props => (
    
    <div className="menu">
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/goals">Goals</Link>
          </li>
          <li>
            <Link to="/historic">Historic</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
  
  export default Menu;