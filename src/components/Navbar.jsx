import { Button } from "antd";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <form id="search-form" className="flex-grow-1" role="search">
          <input
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <div className="text-end">
         <Button className="mx-1 my-1 fw-semibold">
  <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>Login</Link>
</Button>
          <Button type="primary" className="mx-1 my-1 fw-semibold">
            Sign-up
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
