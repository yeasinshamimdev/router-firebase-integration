import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { user, singInWithGoogle } = useFirebase();

    return (
        <div>
            <h3>Please LogIn </h3>
            <div style={{ margin: '20px' }}>
                <button onClick={singInWithGoogle}>Google login</button>
            </div>
            <form className='login-form'>
                <input type="email" name="" id="email-input" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="password-input" placeholder='password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;