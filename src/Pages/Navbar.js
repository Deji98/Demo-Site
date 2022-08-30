import { NavLink } from "react-router-dom";




const StyledNavbar = () => {
    return(
     <nav className="navbar" >
            <NavLink className="home-nav" to="/">Home</NavLink>
            <NavLink className="abt-nav" to="Pricing">Pricing</NavLink>
            <NavLink className="login" to="Login">Login</NavLink>
            <NavLink className="schedule" to="/Schedule">Schedule a demo</NavLink>
        </nav>
   
    );
}

export default StyledNavbar;