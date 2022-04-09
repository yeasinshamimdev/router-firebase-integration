import React from 'react';
import './Login.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Login = () => {
    const [user,] = useAuthState(auth);
    return (
        <div>
            <h3>Please LogIn </h3>
            <div style={{ margin: '20px' }}>
                <button>Google login</button>
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