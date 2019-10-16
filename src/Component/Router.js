import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import {createBrowserHistory} from "history"
import Home from "./Home/Home"
import Login from "./Login/Login"
import React from 'react';
import AfterLogin from "./AfterLogin/AfterLogin"
import About from "./About/About" 
import Contact from "./Contact/Contact"
const Routers =()=>{
    const history = createBrowserHistory();

    return(
        <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    {/* <Route path="/logined/:param" component={Login} /> */} 

                    <Route exact path="/logined" component={AfterLogin} />
                    <Route exact path="/about/:id" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
        </Router>
    )
}
export default Routers