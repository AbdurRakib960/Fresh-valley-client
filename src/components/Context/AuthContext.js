import React, {createContext, useState , useContext} from 'react';
import {auth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword    } from '../Config/firebase.config';


const AuthContext = createContext();
export function useAuth(){
    return useContext(AuthContext)
}



export function AuthProvider({children}) {
    const [userName, setUserName] = useState();
    const [currentUser, setCurrentUser] = useState();
    

    function emailSignUp(email,password, name) {
        return createUserWithEmailAndPassword(auth, email, password,)
        .then(userInfo => {
            console.log(userInfo.user)
            nameUpdate(name)
            
        })
    };

    function emailSignIn(email, password) {
        return signInWithEmailAndPassword (auth, email, password)
    }

 
    function nameUpdate(name) {
        updateProfile(auth.currentUser, {
            displayName: name, 
          }).then(() => {
            setUserName(name)
          }).catch((error) => {
           console.log('update error message', error.message || error.code)
          });
    };

    onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user)
        } else {
          console.log('sign out')
        }
      });


    const values = {
        emailSignUp,
        emailSignIn,
        nameUpdate,
        userName,
        currentUser
    }

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}