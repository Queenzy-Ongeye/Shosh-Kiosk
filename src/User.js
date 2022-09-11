import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import images from "./images/girl.png"
import "./User.css"
import Navbar from './Navbar';
import Email from './Email';


const User = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cls, setCls] = useState("green");

    const handleSubmit = () => {
        const data = {
            'email': email,
            'password': password
        }
        alert(JSON.stringify(data));
    }


    return (
        <div className="user">
            <style>{`
                .red {background-color: rgb(70,157,164)}
                .green {background-color: crimson;}
            `}</style>
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
                            <form onSubmit={handleSubmit}>
                                <p>Your email</p>
                                <input type="text" placeholder="name@domain.com" className='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                <p>Password</p>
                                <input type="text" placeholder="at least 8 characters" className='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                <div className='sec-three'>
                                    <div className='input'>
                                        <input type="checkbox" /> Keep me logged in
                                    </div>
                                    <div>
                                        <p className='pass'>Forgot password?</p>
                                    </div>
                                </div>

                                <button type="submit" className={cls}
                                    onClick={() => setCls((cls) => (cls === "red" ? "green" : "red"))}>Login</button>
                            </form>

                            <p className="or"><hr />or</p>
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
                {email ? <Navbar email={email} /> : <Email />}

            </div>
        </div>

    )
}
export default User;