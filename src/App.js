
import Navbar from "./navbar";
import Home from "./home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import  Create  from "./create";
import Blogdetails from "./blogdetail";
import Pagenon from "./pageunfound";
import About from "./about";
import Login from "./login";
import {useState} from "react"
import Cookies from 'universal-cookie';
const cookies = new Cookies();



function App() {
  // const title= "welcome to the new blog";
  // const person = {age:"adf", name:"ladfa"};
  const[nav,setNav]=useState(cookies.get('jwt'))
  
  return (
    <Router>
    <div className="App">
      <Navbar nav={nav} />   
      <div className="content"> 
        <Switch>
          <Route exact path="/">
            <Login setNav={setNav}/>
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id"> 
            <Blogdetails/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/login">
            <Login />
          </Route> */}
          <Route path='*'>
            < Pagenon />
          </Route>

        </Switch>
        {/* <h1>{  10+5}</h1>
        <h1>{  title}</h1>
        <h1>{  Math.random()}</h1> */}
        {/* <p> humans { person}</p> */}
        </div>
    </div>
    </Router>
  );
}

export default App;
