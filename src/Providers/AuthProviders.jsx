import React, { createContext, useEffect, useState } from 'react';
import app from '../../src/Shared/firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

export const AuthContext= createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading, setLoading] = useState(true);

const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}

//  const googleSignIn=(provider)=>{
//     return signInWithPopup(auth,provider);
//  }

const SignIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}

const profileUpdate=(displayName,photoURL)=>{
    return updateProfile(auth.currentUser,{displayName,photoURL})
}

const logOut=()=>{
    setLoading(true);
    return signOut(auth);
}

useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,currentUser=>{
     setUser(currentUser);
     setLoading(false);

    });

    return () =>{
       return unSubscribe();
    }
},[])


    const AuthInfo={

        user,
        loading,
        createUser,
        SignIn,
        logOut,
        profileUpdate
       
       
    }
    return (
     <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProviders;