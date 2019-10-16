import React from "react"
import {Link} from "react-router-dom"
import "./Home.css"
import Nav from "../Nav/Nav"


class Home extends React.Component{
    
    render(){
        // console.log(this.props);
        return(
            <div>
                    <Nav sendStyle="background: yellow;"/>
                    <p className="paragraph">
                        Officia reprehenderit ex occaecat quis culpa ea consequat laboris officia do.
                        Nulla sunt nisi culpa reprehenderit ex irure ad laboris commodo.
                        Irure proident dolor reprehenderit velit irure ad ad aliquip do excepteur
                        eiusmod dolore aliqua nostrud. Eiusmod adipisicing irure ex consequat nulla
                        excepteur qui anim eu pariatur cillum. Adipisicing ipsum ullamco exercitation
                        nostrud et. Est in consequat aliqua elit quis nisi ea nulla pariatur eiusmod
                        cupidatat voluptate laboris sunt. Est tempor laborum culpa nisi tempor ex culpa
                        cillum et eu fugiat deserunt ipsum.
                    </p>
                   
                    <div className="login-button">
                        <Link to="/login" >
                             login
                        </Link>
                    </div>
            </div>
        )
    }
}
export default Home