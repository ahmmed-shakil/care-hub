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
    const [error, setError] = useState('');
    const auth = getAuth();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }


    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 characters long')
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('')
                setUserName();
            })
            .catch(err => {
                if (err.code === 'auth/email-already-in-use') {
                    setError('This email is already in use. Please select a new email')
                }

            })
            .finally(() => {
                setIsLoading(false);
                setText('Registration successful. You can now login to your account')
            }
            )
    }
    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setError('')
            })
            .catch(err => {
                if (err.code === 'auth/user-not-found') {
                    setError('User not found.Please create a new account')
                }
                else if (err.code === 'auth/wrong-password') {
                    setError('Wrong password')
                }

            })
            .finally(() => setIsLoading(false))
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
        text
    }
}

export default useFirebase;