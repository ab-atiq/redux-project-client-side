import { useEffect } from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import firebaseAuthentication from "../Component/Firebase/Firebaseinitialize";

// initialize firebase
firebaseAuthentication();


const useFirebase = () => {

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('')

  // Admin Check 
  const [admin, setAdmin] = useState(false)
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);

        //save user from database

        // console.log(email,name);
        saveUser(email, name, 'POST');

        // send name To Firebase .. (Firebase Manage user thaika nise)
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
        });
        setAuthError('')
      })
      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false));
    navigate('/')
  };


  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location.state?.from || '/';
        navigate(destination);
        setAuthError('')
      })
      .catch((error) => {
        setAuthError(error.message)
      })
      .finally(() => setIsLoading(false));
  }

  const googleLogIn = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        // console.log(user);

        saveUserGoogle(user.email, user.displayName, user.photoURL, 'PUT');

        const destination = location.state?.from || '/';
        navigate(destination);
        setAuthError('')
      }).catch((error) => {
        setAuthError(error.message)
      }).finally(() => setIsLoading(false));
  }

  // Obserbar  Browser 

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, [])


  const logOut = () => {
    setIsLoading(true)
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
      .finally(() => setIsLoading(false))
      ;
  }

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName }
    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()
  };
  const saveUserGoogle = (email, displayName, img, method) => {
    const user = { email, displayName, img }
    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()
  }

  // Admin Check 
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
  }, [user.email])




  return {
    user,
    registerUser,
    loginUser,
    admin,
    authError,
    isLoading,
    googleLogIn,
    logOut,


  };
};

export default useFirebase;
