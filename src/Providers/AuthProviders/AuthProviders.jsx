import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";



export const AuthContext=createContext(null)
const auth = getAuth(app);


const AuthProviders = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)


    const signUpUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth ,email,password);
    }
    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth, email,password);
    }
    const signInOutUser=()=>{
        return signOut(auth)
    }


    // Display User And Photo URL

    const displayUser=(name,photoURL)=>{
        updateProfile(auth.currentUser, {
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
        displayUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;