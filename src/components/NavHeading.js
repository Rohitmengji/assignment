import { NavLink } from "react-router-dom";

export const NavHeading = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <div style={{margin: '10px 0px'}} align="center">
      <nav>
        <NavLink to="/" style={navLinkStyles}>
          <button className="btn btn-primary m-1"> Calculator </button>
        </NavLink>
        <NavLink to="/textUtils" style={navLinkStyles}>
          <button className="btn btn-primary">TextUtils</button>
        </NavLink>
      </nav>
    </div>
  );
};
