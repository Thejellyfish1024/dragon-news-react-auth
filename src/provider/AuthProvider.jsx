/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('current user stat: ',currentUser);
            setUser(currentUser)
        })
        return () => unSubscribe();
    },[])

    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;