import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import {updateProfile, signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext= createContext('AUTH');
export const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user,SetUser]= useState(null);
    const [loading,setLoading]=useState(true);
    
    
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const reworkProfile=(name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo,
          })
    }


    const logOut=()=>{
        setLoading(true);
        return signOut(auth); 
    }

    const googleAuth=()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const githubLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth, gitProvider);
    }


    
    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth, (currentUser)=>{
           SetUser(currentUser);
           setLoading(false);
       })
       return () =>{
         unSubscribe();
       }
    },[])




    const AuthInfo={createUser,signInUser,user,logOut,reworkProfile,googleAuth,githubLogin,loading}

    return (
        <AuthContext.Provider value={AuthInfo}>
              {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;