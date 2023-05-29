import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";



export const AuthContext=createContext(null)
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)


    const signUpUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth ,email,password);
    }
    const signInUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password);
    }
    const signInOutUser=()=>{
        return signOut(auth)
    }

    // Social 
    const loginWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }



    // Display User And Photo URL

    const displayUser=(name,photoURL)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          })
    }


    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unSubscribe;
        }

    },[])


    const authInfo={
        user,
        loading,
        signInUser,
        signUpUser,
        signInOutUser,
        displayUser,
        loginWithGoogle
    }


    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;