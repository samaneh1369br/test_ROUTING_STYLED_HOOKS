import React from "react"
import Nav from "../Nav/Nav"
import { css } from 'styled-components';

const customeStyle = css`
background: orchid;
`

class Contact extends React.Component{
    render(){
        return(
            <div>
                <Nav sendStyle={customeStyle}/>
                <div>Contact page</div>
            </div>
        )
    }
}
export default Contact