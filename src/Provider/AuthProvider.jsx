import React, {  useEffect } from 'react';

import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import useAxiosPublic from '../Hooks/useAxiosPublic';




const auth = getAuth(app);
export const AuthContext = createContext(null)
const axiosPublic =useAxiosPublic()
// eslint-disable-next-line react/prop-types
 const AuthProvider = ({children}) => {
   const [user,setuser]=useState(null)
 const [loader,setloader]=useState(true)

   const googleProvider = new GoogleAuthProvider()

   const CreateUser =(email,password)=>{
    setloader(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }
   const LogInUser =(email,password)=>{
    setloader(true)
    return signInWithEmailAndPassword(auth,email,password) 
   }
   const UpdateUser =(name,photo)=>{
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
   }

  


   const googleSignIn =()=>{
      return signInWithPopup(auth,googleProvider)
   }
   const SignOut =()=>{
    setloader(true)
    return signOut(auth)
   } 

    const authInfo ={
       user,
       CreateUser,
       LogInUser,
       googleSignIn,
       SignOut,
       loader,
       UpdateUser
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setuser(currentUser);  
          console.log("state capture",currentUser);
          if (currentUser) {
            // get token 
              const userInfo = {email :currentUser.email}
              axiosPublic.post('/user',userInfo)
              .then(res=>{
                if (res.data.token) {
                  localStorage.setItem('access-token',res.data.token)
                }
              })
          }
          else{
            // removed token
            localStorage.removeItem('access-token')
          }
          setloader(false);      
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