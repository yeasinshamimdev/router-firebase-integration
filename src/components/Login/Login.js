import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div>
            <h3>Please LogIn </h3>
            <div style={{ margin: '20px' }}>
                <button>Google login</button>
            </div>
            <form className='login-form'>
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;