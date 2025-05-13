import { Link } from "react-router-dom";
import useAuthState from "../../state/useAuthState";
import "./Navbar.css";

export default function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useAuthState();

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/saved">
            <span>Saved Images</span>
          </Link>
        </li>
        <li>
          <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
            <span>{isAuthenticated ? "Logout" : "Login"}</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
