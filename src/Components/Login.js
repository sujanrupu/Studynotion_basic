import './Login.css'
import google_logo from './assets/google_logo.png'
import login from './assets/login.png'
import frame from './assets/frame.png'
import Dashboard from './Dashboard'
import Home from './Home'
import React, { Component } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function Login() {
    const handleLogin = () => {
        toast.success("Logged in", {
            position: toast.POSITION.TOP_CENTER,
            className: "toast-message",
        });
    }

    let checkClick = true;
    return (
        <div className='total'>
            <div className="leftPart">
                <div className="welcome">
                    Welcome Back
                </div>

                <div className="desc1">
                    Build skills for today, tomorrow, and beyond.
                    <p className="special">Education to future-proof your career.</p>
                </div>

                <form>
                    <div className='form_email'>
                        <div className="email_heads">Email address: <span className="imp">*</span>  </div>  <br />
                        <input type="email" name="" id="emailfield" placeholder='Enter email address' />
                    </div>
                    <div className='form_pass'>
                        <div className="pass_heads">Password: <span className="imp">*</span> </div>  <br />
                        <input type="password" name="" id="passfield" placeholder='Enter password' />
                        <p className='forget'>Forget Password</p>
                    </div>

                    <Link to="/Dashboard" className='signin_form1'>
                        <button className="signin_form" onClick={() => {
                            handleLogin();
                    }
                    }>Sign in</button>
                    </Link>


                    <span className="or">
                        <hr className='left' />
                        <span className='text'>OR</span>
                        <hr className='right'></hr>
                    </span>

                    <button className='signGoogle'>
                        <img src={google_logo} alt="" className='glogo' />
                        Sign in with Google
                    </button>
                </form>
            </div>

            <div className="rightPart">
                <img src={frame} alt="" className='frame' />
                <img src={login} alt="" className='login' />
                <Link to="/Signup"><button className="signup3">Sign up</button></Link>
            </div>

        </div>
    );
}
export default Login;