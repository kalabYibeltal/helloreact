
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies();



const axios = require('axios')


const Login = (props) => {
  // const form = document.querySelector('form');
  // const emailError = document.querySelector('.email.error');
  // const passwordError = document.querySelector('.password.error');

  const [email, setemail]= useState();
  const [password, setpassword]= useState()
  // const [token, settoken]= useState()
  

  // const maxAge = 3 * 24 * 60 * 60;
  const history = useHistory();

  //  const handle = () => {
  //     localStorage.setItem('email', email);
  //     localStorage.setItem('Password', password);
  //  };
  //  const remove = () => {
  //     localStorage.removeItem('email');
  //     localStorage.removeItem('Password');
  //  };


  // console.log(props.setNav)

  const handlesub = async (e,setNav) =>{
    
    // console.log(setNav)
    e.preventDefault();

    console.log('here')
    // get values
    // const email = eamil
    // const password = form.password.value;
    

    try {
      console.log('posting login')
      axios.post('http://localhost:8000/login', {
            email: email,
            password: password
        }).then((res)=>{
          console.log(res.data)
          setNav(res.data)
          cookies.set('jwt', res.data, { expires: new Date(Date.now()+2592000) });
          history.push('/home');
          // window.location.reload()
          // console.log(cookies.get('myCat')); // Pacman
        
        })
     

    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={(e)=>handlesub(e,props.setNav)}>
      <h2>Login</h2>
      <label class="email">User name</label>
      <input 
          type="text"
          required
          value={email}
          onChange={(e)=> setemail(e.target.value) }
      />
      <div class="email error"></div>
      <label for="password">Password</label>
      <input 
          type="text"
          required
          value={password}
          onChange={(e)=> setpassword(e.target.value) }
      />
      <div class="password error"></div>
      <button>login</button>
    </form>
    );
}
 
export default Login;


