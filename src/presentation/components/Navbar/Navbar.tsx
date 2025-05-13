import useAuthState from "../../state/useAuthState";
import "./Navbar.css";

export default function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useAuthState();

  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/">
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/saved">
            <span>Saved Images</span>
          </a>
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
