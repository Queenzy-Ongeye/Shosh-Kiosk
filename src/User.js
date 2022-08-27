import React from 'react';
import "./User.css"

const User = () => {
    return (
        <div className="user">
            <div className='main'>
                <div className='eddie'>
                    <h3>EddieShop</h3>
                </div>
                <div className='sign'>
                    <p>Dont have an account? <span>Sign Up</span></p>
                </div>
            </div>
            <div id='form'>
                <div id='sec-one'>
                    <h2>Welcome Back</h2>
                    <div id='sec-two'>
                        <p>Your email</p>
                        <input type="text" placeholder="name@domain.com" className='email' />

                        <p>Password</p>
                        <input type="text" placeholder="at least 8 characters" className='password' />

                        <div className='sec-three'>
                            <input type="checkbox" /> Keep me logged in
                            <p>Forgot password?</p>
                        </div>

                        <button type="submit" className="btn btn-primary">Login</button>
                        <p>or</p>
                        <div className="icons">
                            
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default User;