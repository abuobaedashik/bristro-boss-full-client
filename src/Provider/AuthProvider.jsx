import React, {  useEffect } from 'react';

import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext } from 'react';
import app from '../Firebase/Firebase.config';




const auth = getAuth(app);
export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
 const AuthProvider = ({children}) => {
   const [user,setuser]=useState(null)

    const authInfo ={
       user
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setuser(currentUser);  
          console.log("state capture",currentUser);
        //   setloader(false);      
        });
      
        return () => {
          unsubscribe(); 
        };
      }, []);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;