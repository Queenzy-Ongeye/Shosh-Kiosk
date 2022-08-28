import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import images from "./images/girl.png"
import "./User.css"

const User = () => {
    return (
        <div className="user">
            <div className='card'>
                <div className='main'>
                    <div className='eddie'>
                        <h3>EddieShop</h3>
                    </div>
                    <div className='sign'>
                        <p>Dont have an account? <span>Sign Up</span></p>
                    </div>
                </div>
                <div className='form'>
                    <div className='sec-one'>
                        <h2>Welcome Back</h2>
                        <div className='sec-two'>
                            <p>Your email</p>
                            <input type="text" placeholder="name@domain.com" className='email' />

                            <p>Password</p>
                            <input type="text" placeholder="at least 8 characters" className='password' />

                            <div className='sec-three'>
                                <div className='input'>
                                    <input type="checkbox" /> Keep me logged in
                                </div>
                                <div>
                                    <p className='pass'>Forgot password?</p>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary">Login</button>
                            <p className="or">or</p>
                            <div className="icons">
                                <FaFacebook className="icon" />
                                <FaGoogle className="icon" />
                                <FaInstagram className="icon" />
                            </div>
                        </div>
                    </div>

                    <div className="side-img">
                        <img src={images} alt="Logo" />
                    </div>

                </div>
            </div>


            <div className="container">
                <h2>Fonts</h2>

                <div className="letters">
                    <div className="one">
                        <h4>Aa</h4>
                        <p className="robo">Roboto Regular</p>
                    </div>

                    <div className="two">
                        <h4>Aa</h4>
                        <p className="robo"> Roboto Medium</p>
                    </div>
                </div>

                <h2>Colors</h2>
                <div className="colors">
                    <div className="color">
                        <div className="color-two"></div>
                        #FDE19D
                    </div>

                    <div className="color">
                        <div className="color-three"></div>
                        #469DA4
                    </div>

                    <div className="color-four">
                        <div className="color-four"></div>
                        #6B6B6B
                    </div>
                </div>

            </div>

        </div>
    )
}
export default User;