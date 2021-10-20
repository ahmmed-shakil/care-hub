import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.initialize'


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [logInError, setLogInError] = useState('');
    const [registrationError, setRegistrationError] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }


    const handleRegistration = () => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = () => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser('')
            }).catch((error) => {
                setError(error)
            });
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(err => {
                setError('')
            })
            .finally(() => {
                setIsLoading(false);
                setText('Login Successful')
            })


    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user?.email) {
                setUser(user);
            }
            else {
                setUser('');
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    const removeError = () => {
        setError('')
        setText('')
        setLogInError('');
        setRegistrationError('');
    }

    return {
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        error,
        handleLogin,
        logOut,
        isLoading,
        user,
        handleNameChange,
        setUserName,
        handleGoogleSignIn,
        setIsLoading,
        setError,
        removeError,
        setText,
        text,
        logInError,
        setLogInError,
        registrationError,
        setRegistrationError
    }
}

export default useFirebase;