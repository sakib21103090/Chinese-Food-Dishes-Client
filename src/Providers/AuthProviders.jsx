import React, { createContext } from 'react';
import app from '../../src/Shared/firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";

export const AuthContext= createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {

const user=null;

const createUser=(email,password)=>{
   
    return createUserWithEmailAndPassword(auth,email,password);
}

    const AuthInfo={

        user,
        // loading,
        createUser,
        // SignIn,
        // logOut
    }
    return (
     <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProviders;