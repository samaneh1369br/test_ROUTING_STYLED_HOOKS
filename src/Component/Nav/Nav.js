import React from "react"
import {Link} from "react-router-dom"
import styled ,{Wrapper} from "styled-components"

// export const Paragraph=styled.p`
// font-size:15px;
// color:blue;
// text-align:left
// `
// export const ParagraphCustomStyle=styled(Paragraph)`
// ${props=>props.coustomStyle}`
const Nav=styled.ul`
    display: flex;
    font-weight: bolder;
    justify-content: center;
    width: 100%;
    align-items: center;
    background: plum;
    border-bottom: 3px solid purple;
    height: 80px;
    color:purple;
    list-style: none;
    margin-top: 0;
    font-size: 30px ;
    
    a{
        color:${
            props=>{
                if (props.styleColor==="active")
                {
                    return("green")
                }else if(props.styleColor==="error")
                {
                    return("red")
                }
                else{
                    return("black")
                }
            }
    };
        text-decoration: none;
    }

    li{
        margin: 0 90px;
        padding: 0;
    }
    ${props=>props.coustomStyle}
    `


class Contact extends React.Component{
    constructor(){
        super();
       
    }
    render(){
        console.log(this.props)
        return(
            <Wrapper>
            <Nav coustomStyle={this.props.sendStyle} styleColor={this.props.navStatus} >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/about/bahar">About Us</Link></li>
            </Nav>
            </Wrapper>
        )
    }
}
export default Contact