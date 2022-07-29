
import React from "react";
import "./Register.css";
import { useState,useEffect } from 'react';
import { Link,useNavigate} from "react-router-dom";

function Register(props){
  const navigate = useNavigate()
  const[user_name,setUser_name]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
   
   async function registerUser(event){
     event.preventDefault()
     const response = await fetch('http://localhost:300/api/register',{
       method:'POST',
       headers : {
         'Content-Type':'application/json',
 
       },
       body:JSON.stringify({
         user_name,
         email,
         password,
       }),
     })
    const data =await response.json()
    if(data.status === 'ok'){
      navigate('/login')
    }
    else{
      alert('User Email or Name already exists')
    }
   }

  return (
    <>
    <form className="login-form"  onSubmit={registerUser}>
       
        
        <div id="register">
          <div className="row">
            <div id="headerTitle">
         <div className="heading-info">Register</div>
            </div>
         <div className="nameControlClasses">
           <div className="left">
        <label htmlFor="username">Username</label>
        </div>
        <div className="right">
       <input type="text"  value={user_name} onChange={(e) => setUser_name(e.target.value)} placeholder="Name" /><br></br>
        
      </div>
      </div>
      
     
      <div className="passwordControlClasses">
      <div className="left">
        <label htmlFor="pwd">Password</label>
        </div>
  
        <div className="right">
       <input type="text"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/><br></br>

         </div>
      </div>
         
            <>
         
         
          <div className="nameControlClasses">
            <div className="left">
            <label htmlFor="emial">Enter Email ID</label>
            </div>
            <div className="right">
       <input type="text"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/><br></br>

          </div>
          </div>

          
            </>
           

       
        <div className="button">
        <input type="submit" value="Register"/>
        </div>
        </div>
        </div>
      

    </form>


        </>

      
      
  )

          };
export default Register;