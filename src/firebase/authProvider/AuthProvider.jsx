import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.config";
import PropTypes from 'prop-types';

const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInwithpassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const updateUserInfo = (name, photoLink) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photoLink })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
        })
        return () => unsubscribe()
    }, [])
    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        createUser,
        signInwithpassword,
        signInWithGoogle,
        updateUserInfo,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node //'any' if doesn't work
};
export default AuthProvider;