import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>this is Home</h1>
            <h4>Current User is: {user ? user.displayName : 'No user found'}</h4>
        </div>
    );
};

export default Home;