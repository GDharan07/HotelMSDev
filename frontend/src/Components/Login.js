import React from 'react'
import img from "../assets/colorfullimg.jpg" 

function Login() {
  return (
    <div className='container'>
        <div className='row mt-5'>
            <div className='col-lg-5 col-md-6'>
                <img src={img} alt='alt' className='rounded' height="450vh" width='400px'/>
            </div>
            <div className='col-lg-5 col-md-6'>
                <div className='d-flex flex-column align-items-center mt-5'>
                    <div className='login-inputs mb-3'>
                        <input type='text' class='form-control' placeholder='Username'/>
                    </div>
                    <div className='login-inputs'>
                        <input type='password' class='form-control' placeholder='Password'/>
                    </div> 
                </div>
            </div>
        </div>
    </div>  
  )
}

export default Login