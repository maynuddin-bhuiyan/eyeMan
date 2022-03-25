import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";


// initialize Firebase
initializeFirebase();


const useFirebase = () => {

    // State Declare
    const [user, setUser] = useState({});
    const [logindata, setLogindata] = useState(true);
    const [userErrer, setUserErrer] = useState('');



    // Auth  Declare
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    // Create a new user
    const CreateaUser = (email, password, location, navigate) => {
        setLogindata(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUserErrer('');
                const destination = location?.state?.from || `/`;
                navigate(destination);

            })
            .catch((error) => {
                setUserErrer(error.message);
            })
            .finally(() => setLogindata(false));

    };









    // user onAuthStateChanged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);

            } else {
                setUser({});
            }
            setLogindata(false)
        });

        return () => unsubscribe;

    }, []);




    //log Out User
    const logOutUser = () => {
        signOut(auth).then(() => {
            setUserErrer('');
        }).catch((error) => {
            setUserErrer(error.message);
        })
            .finally(() => setLogindata(false));
    };




    //log In User
    const logInUser = (email, password, location, navigate) => {
        setLogindata(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || `/`;
                navigate(destination);
                setUserErrer('');
            })
            .catch((error) => {
                setUserErrer(error.message);
            })
            .finally(() => setLogindata(false));
    };




    //sign In With Google
    const signInWithGoogle = (location, navigate) => {
        setLogindata(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUserErrer('');
                const destination = location?.state?.from || `/`;
                navigate(destination);

            }).catch((error) => {
                setUserErrer(error.message);

            })
            .finally(() => setLogindata(false));

    }





    // sign In With Facebook
    const signInWithFacebook = (location, navigate) => {

        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                const user = result.user;
                setUserErrer('');
                const destination = location?.state?.from || `/`;
                navigate(destination);

                // ...
            })
            .catch((error) => {
                setUserErrer(error.message);
            })
            .finally(() => setLogindata(false));

    }











    return {
        user,
        logindata,
        userErrer,
        CreateaUser,
        logOutUser,
        logInUser,
        signInWithGoogle,
        signInWithFacebook
    };



}


export default useFirebase;