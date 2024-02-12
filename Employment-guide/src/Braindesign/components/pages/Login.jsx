import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './style.css';



function Login() {
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
        <div className='form-container p-5 rounded bg-white'>
            <form>
                <h3 className='text-center'>Sign In</h3>
                <div className='mb-2'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter Email' className='form-control' />
                </div>
                <div className='mb-2'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password' className='form-control' />
                </div>
                <div className='mb-2'>
                    <input type="checkbox" className='custom-control custom-checkbox' id='check' />
                    <label htmlFor="check" className='custom-input-label ms-2'>Remember me</label>
                </div>
                <div className='d-grid'>
                <Link to='/'><button className='btn btn-primary'>Login</button></Link>
                </div>
                <p className='text-end mt-2'>
                    Forgot <a href="">Password?</a><Link to='/sign-up' className='ms-2'>SignUp</Link>
                </p>
            </form>
        </div>
    </div>
  )
}

export default Login