import './Signup.css'
import google_logo from './assets/google_logo.png'
import signup from './assets/signup.png'
import frame from './assets/frame.png'
import Dashboard from './Dashboard'
import Home from './Home'
import React, { Component } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Signup() {
    return (
        <div className='total'>
            <div className="leftPart1">
                <div className="welcome">
                    <p className='welcome1'>Join the millions learning to</p>
                    <p className='welcome2'>code with StudyNotion for free</p>
                </div>

                <div className="desc2">
                    Build skills for today, tomorrow, and beyond.
                    <p className="special">Education to future-proof your career.</p>
                </div>

                <form>
                    <div className="pass">
                        <div className='form_pass1'>
                            <div className="pass_heads">First Name: <span className="imp">*</span> </div>  <br />
                            <input type="text" name="" id="passfield1" placeholder='Enter password' />
                        </div>

                        <div className='form_pass2'>
                            <div className="pass_heads">Last Name: <span className="imp">*</span> </div>  <br />
                            <input type="text" name="" id="passfield2" placeholder='Enter password' />
                        </div>
                    </div>

                    <div className='form_email1'>
                        <div className="email_heads">Email address: <span className="imp">*</span>  </div>  <br />
                        <input type="email" name="" id="emailfield1" placeholder='Enter email address' />
                    </div>
                    <div className="pass">
                        <div className='form_pass1'>
                            <div className="pass_heads">Create Password: <span className="imp">*</span> </div>  <br />
                            <input type="password" name="" id="passfield1" placeholder='Enter password' />
                        </div>

                        <div className='form_pass2'>
                            <div className="pass_heads">Confirm Password: <span className="imp">*</span> </div>  <br />
                            <input type="password" name="" id="passfield2" placeholder='Enter password' />
                        </div>
                    </div>


                    <Link to="/Dashboard" className='signin_for3'>
                        <button className="signin_form2">Create Account</button>
                    </Link>


                    <span className="or1">
                        <hr className='left' />
                        <span className='text'>OR</span>
                        <hr className='right1'></hr>
                    </span>

                    <button className='signGoogle1'>
                        <img src={google_logo} alt="" className='glogo' />
                        Sign up with Google
                    </button>
                </form>
            </div>

            <div className="rightPart1">
                <img src={frame} alt="" className='frame1' />
                <img src={signup} alt="" className='login11' />
                <Link to="/Login"><button className="login3">Log in</button></Link>
            </div>

        </div>
    );
}
export default Signup;