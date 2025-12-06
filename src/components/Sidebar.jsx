import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <div className="menu-header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
            alt="menu-icon"
          />
          <span>Menu</span>
        </div>
        <hr />
        <ul className="nav flex-column">
          <li>
            <Link to="/" className="nav-link">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                alt="home-icon"
              />
              Home
            </Link>
          </li>
          <li>
            <Link to="/createpost" className="nav-link">
              <img
                src="https://www.freeiconspng.com/thumbs/writing-icon/writing-icon-4.png"
                alt="post-icon"
              />
              Create Post
            </Link>
          </li>
          <li>
             <Link to="/createpost" className="nav-link">
              <img
                src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
                alt="friends-icon"
              />
              Friends
            </Link>
          </li>
          <li>
            <Link to="/account" className="nav-link">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png"
                alt="account-icon"
              />
              Account
            </Link>
          </li>
        </ul>
      </div>
      <div className="sb-footer">© 2024 Kingshuk Sarkar</div>
    </div>
  );
}

export default Sidebar;
