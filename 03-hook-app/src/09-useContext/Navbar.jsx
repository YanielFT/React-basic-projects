import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const isActive = ({ isActive }) => {
    if (isActive) return "nav-link active";
    return "nav-link";
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand" href="#">
            UseContext
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className={isActive} to={"/"}>
                Home
              </NavLink>
              <NavLink className={isActive} to={"/about"}>
                About
              </NavLink>
              <NavLink className={isActive} to={"/login"}>
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
