import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import {updateProfile, signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";



export const AuthContext= createContext('AUTH');

const AuthProvider = ({children}) => {

    const [user,SetUser]= useState(null);
    
    
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const reworkProfile=(name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo,
          })
    }

    const logOut=()=>{
        return signOut(auth); 
    }


    
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth, (currentUser)=>{
           SetUser(currentUser);
       })
       return () =>{
         unSubscribe();
       }
    },[])




    const AuthInfo={createUser,signInUser,user,logOut,reworkProfile}

    return (
        <AuthContext.Provider value={AuthInfo}>
              {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;