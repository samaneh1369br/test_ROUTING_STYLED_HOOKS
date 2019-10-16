import React from "react"
import Nav from "../Nav/Nav"

class About extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const  {match}=this.props;
       console.log(match)
        return(
            <div>
                <Nav sendStyle="background: yellowgreen;"/>
                <div>About page {match.params.id}</div> 
                <div>About page {match.url}</div> 

            </div>
        )
    }
}
export default About