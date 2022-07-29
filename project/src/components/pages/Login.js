
import React from "react";
import "./Login.css";
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
function Login(props){

  const[email,setEmail]=useState('')
  const[user_name,setUser_name]=useState('')
  const[password,setPassword]=useState('')
   
   async function loginUser(event){
     event.preventDefault()
     const response = await fetch('http://localhost:300/api/login',{
       method:'POST',
       headers : {
         'Content-Type':'application/json',
 
       },
       body:JSON.stringify({
         email,
         password,
       }),
     })
    const data =await response.json()
    if(data.user){
      alert('Login Successful')
      window.location.href = '/cart'
    }else{
      alert('Please check your email and password')

      }
    
   }

  

  return (
    <>
    <form className="login-form"  onSubmit={loginUser}>
       
        
        <div id="register">
          <div className="row">
            <div id="headerTitle">
         
         <div className="heading-info">Login</div>
            </div>
         
      
      <div className="nameControlClasses">
            <div className="left">
            <label htmlFor="emial">Enter Email ID</label>
            </div>
            <div className="right">
       <input type="text"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/><br></br>

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
          
             
        <div className="button">

        <input type="submit" value="Login"/>
        </div>
        </div>
        </div>
      

    </form>


        </>
       
      
  )

          };
export default Login;