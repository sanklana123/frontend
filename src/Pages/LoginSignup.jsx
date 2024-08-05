import React, { useState } from 'react'
import './CSS/LoginSignup.css'


const LoginSignup = () => {

  const [state,setState]= useState("Login");
  const[formData,setFormData] =useState({   
      username:"",
      password:"",
      email:"" 
  })
  const changeHadler =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const login=async ()=> {
    console.log("Singup Function Executed", formData);
  

    let responseData;
      await fetch('http://localhost:8081/login',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      }).then((response)=>response.json()).then((data)=>responseData=data)
        
      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
      }
      else{
        alert(responseData.console.errors)
  
      }
    }

  const signup = async () =>
  {
    
    console.log("Singup Function Executed");
    let responseData;
    await fetch('http://localhost:8081/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.console.errors);

    }
  }

  

    return (
      <div className='loginsignup'>
        <div className="loginsingnup-container">
          <h1>{state}</h1>
           <div className="loginsignup-fields">
           {state==="Sign UP"?<input name ='username' value={formData.username} onChange={changeHadler}type="text" placeholder='Your Name'/>:<></>}
              <input name='email' value={formData.email} onChange={changeHadler} type="email" placeholder='Email Address'/>  
              <input name='password'value={formData.password}  onChange={changeHadler} type="password" placeholder='Password'/>        
           </div>
           <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
           {state==="Sign Up"
           ? <p className="loginsignup-login">Already have an account?<span onClick={()=>{setState("Login")}}>Login here</span></p>
           : <p className="loginsignup-login">Create an account?<span onClick={()=>{setState("Sign Up")}}>Click here</span></p>
           } 
           <div className="loginsignup-agree">
             <input type="checkbox" name=''id=''></input>
             <p>By continuing,i agrre to the term of use & privasy policy.</p>
        </div>
         </div>  
       </div>
    )
}
 



export default LoginSignup

// import React from 'react'

// const LoginSignup = () => {
//   return (
//     <div>
//       <h1>jasdh</h1>
//     </div>
//   )
// }

// export default LoginSignup
