import { Link } from "react-router-dom";

function Header(props) {
    return ( 
        <nav className="navbar bg-primary">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand text-white" href="#">
        <i className="bi bi-shop me-3"></i>
          {props.name}
        </Link>

        <ul className="navbar-nav flex-row">
            <li className="nav-item me-3">
                <Link to="/about" className="nav-link active text-white">
                    About
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/services" className="nav-link active text-white">
                    Services
                </Link>
            </li>
        </ul>

      </div>
    </nav>
     );
}

export default Header;