
import "./index.css";
import logo from "./logo.svg";


const Navbar = ({children}) => {
  
 
  return (
    <nav className="main-navbar">
      <section className="logotype">
        <img className="logo" src={logo} alt="logo" />
      </section>
      <section className="dropdown">
        <ul>
        <li><a href="7">HOME</a></li> 
        <li><a href="7">HOME</a></li> 
        <li>{children}</li> 
         
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
