import React,{useState,useEffect} from "react";
import './Project.css';
import axios from 'axios';
const Project1 =() =>{
    const[email,setEmail]= useState("")
    const[password,setPassword]= useState("")
    const[login, setLOGIN]= useState(" ")
    const[error, setError]= useState(" ")

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setLOGIN(false);
    }

    const handlePassword =(e) =>{
        setPassword(e.target.value)
        setLOGIN(false);
    }

    const handclick =(e) =>{
    
        const Info = {
        email: email,
        password : password,
        }
        console.log(Info)

    
      axios({
            method:'post',
            url:'http://localhost:3000/user',
            data: Info
           
        })
        .then((res) => {
            console.log('result',res)
            setEmail("")
            setPassword("")
            alert("Login successFully !")
        })

      e.preventDefault();
      if( email==='' || password ===''){
          setError(true);
      }
      else
      {
          setLOGIN(true);
          setError(false);
      }
    };
    return (

<div>
    
    <div className="photo"> 
    <div className="gif"></div>
    </div> 
    
    <div className="main">
       <div>
        <div className="insta">Instagram</div>
        <form>
           <div ><input className="login-input" type ='text' placeholder="phone number,username,or email"  onChange={handleEmail} value={email}></input></div>
            <div ><input className="login-input" type ='password'placeholder="password" onChange={handlePassword} value={password}></input></div>
        </form><br></br>
        <button className="login" onClick={handclick}>LOGIN</button>
        <div className="OR">
            <div className="line1"></div>
            <h5>OR</h5>
            <div className="line2"></div>  
        </div>
        <div > <a className="face"  href="https://www.facebook.com/"> LOG IN WITH FACBOOK  </a></div>
       
    
       
    </div>

    <div >
    <div className="main2" >
          
            Don't have an account?  <a className="link" href="https://www.instagram.com/accounts/emailsignup/?hl=en">SIGN UP</a>
            </div>
            </div> 
        </div>
    

</div>


    );
}
export default Project1;