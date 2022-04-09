import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase()
    return (
        <div>
            <h1>this is Home</h1>
            <h4>Current User is: {user ? user.displayName : 'No user found'}</h4>
        </div>
    );
};

export default Home;