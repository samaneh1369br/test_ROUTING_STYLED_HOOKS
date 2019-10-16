import React from "react"
// import "./Login.css"
import styled from "styled-components"
import Nav from "../Nav/Nav"
import { createBrowserHistory } from 'history';
// import { createHashHistory  } from 'history'
const buttonStyle = "display:block; width:200px;height: 42px;border: 1px solid black;margin: 30px auto;padding: 7px;color: gray;font-size: 16px;font-weight: bold"
const Button=styled.button`
    ${buttonStyle}
`;
// const Input=styled.input`
//     ${buttonStyle}
//     width:100px;
// `;
// const ButtonStyle2=styled(Input)`
// width:500px;
// `;

const LoginContainer=({className,children})=>{
  return  <div className={className}>
      {children}
    </div>
}
const Input=styled.input`
    display:block;
    width:${props=>props.larger|| "100px"}
    height: 42px;
    border: 1px solid black;
    margin: 30px auto;
    padding: 7px;
    color: gray;
    font-size: 16px;
    font-weight: bold

`

const StyledLoginContainer=styled(LoginContainer)`
 

    width: 400px;
    margin: auto;
    text-align: center;
    position: absolute;
    top:50%;
    height:400px;
    margin-top: -200px;
    margin-left: -200px;
    left: 50%;
    box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.5)
`
class Login extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            user_name:" ",
            password:" ",
            statusSubmit:""
        }
        this.submit=this.submit.bind(this);
    }
    submit=(e)=>{
        const history = createBrowserHistory();
        // const location = history.location;
        // const unlisten = history.listen((location, action) => {
        //     // location is an object like window.location
        //     console.log(action, location.pathname, location.state);
        //   });
        
        e.preventDefault(); 
        const userName=e.target.querySelector("input[type='text']").value;
        const pass=e.target.querySelector("input[type='password']").value;
        const lastSession=localStorage.getItem("login");
        if (lastSession!=pass+userName){
            this.setState({
                user_name:userName,
                password:pass,
                statusSubmit:"active"
                

            },()=>
                    {
                        localStorage.setItem("login",this.state.password+this.state.user_name); 
                        // window.location.href = "/logined";
                       this.props.history.push("/logined", this.state.statusSubmit);
                        //  history.go(0);
                    }
            )
        }
        else{
          console.log("you are logined");
          this.setState({
            statusSubmit:"error"
          });
    }
}
    render(){
        // console.log(this.props);
        
        return(
           
        <div>
            <Nav navStatus={this.state.statusSubmit}/>
            <StyledLoginContainer className="hi">
            <h2>Login</h2>
                <form onSubmit={this.submit}>
                    <Input type="text"  placeholder="userName" />
                    <Input type="password"  placeholder="password"/>
                    <Button type="submit" >submit</Button>
                    <span></span>

                </form>
            </StyledLoginContainer>
        </div>
        )
    }
}
export default Login