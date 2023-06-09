import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInwithpassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithSocials = (Provider) => {
        setLoading(true)
        return signInWithPopup(auth, Provider)
    }
    const updateUserInfo = (name, photoLink) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photoLink })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])
    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        googleProvider,
        githubProvider,
        createUser,
        signInwithpassword,
        signInWithSocials,
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