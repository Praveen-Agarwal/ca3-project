import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { useEffect, useState } from 'react';
import { auth } from './Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function App() {
  const [username, setUserName] = useState("")
  const [useremail, setUseremail] = useState("")
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res) {
        setUserName(res.displayName);
        setUseremail(res.email);
        navigate("home")
      }
      else {
        setUserName("")
        setUseremail("");
      }
    })
  },[navigate])
  const signout = () => {
    signOut(auth).then(() => {
      // Sign-out successful
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup signout={signout} />} />
      <Route path='/home' element={<Home name={username} email={useremail} signout={signout} />} />
      <Route path='/*' element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
