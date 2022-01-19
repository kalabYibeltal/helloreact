import {Link } from 'react-router-dom'
const Navbar = () =>{
     return(
         <nav className="navbar">
            <h1>the dojo blog</h1>
            <div className="links">
                <Link to="/" style={{
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: "8px"
                }}>home</Link>
                <Link to="/create" style={{
                    color: "black",
                    backgroundColor: "yellow",
                    borderRadius: "8px"
                }}>new blog</Link>
                <Link to="/about" style={{
                    color: "white",
                    backgroundColor: "red",
                    borderRadius: "8px"
                }}>about</Link>
            </div>
         </nav>
      );
 }
 export default Navbar;
 