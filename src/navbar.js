import {Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
// import { useState } from 'react';
import React from 'react';
const cookies = new Cookies();

const Navbar = (props) =>{
    // const [cook, setcook]= useState();
    // console.log(cook)
    
    // const handler = (e) =>{
    //     setcook(cookies.get('jwt'))
    //     console.log('i am ' + cook)
    // }

    // React.useEffect(()=>{
    //     setcook(cookies.get('jwt'))
    // },[cookies.get('jwt')])
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
                
                <Link  to="/" style = {{
                    color: "white",
                    backgroundColor: "blue",
                    borderRadius: "8px"
                }}>
                    {cookies.get('jwt') ? (
                        <>Hello, {props.nav} </> 
                    ) : (
                        <> </>
                    )}
                </Link>
               
        
            
            </div>
         </nav>
      );
 }
 export default Navbar;
 