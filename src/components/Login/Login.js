import React from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'
import { useState, } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Firebase'


export default function Login() {
  const [values, setValues] = useState({
    name: "",
    pass: ""
  })
  const [errorMsg, setErrorMsg] = useState("")
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false)
  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all Fields")
      return
    }
    setSubmitBtnDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass).then().catch((err) => {
      setErrorMsg(err.message)
      setSubmitBtnDisabled(false);
    })
  }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Log In</h1>

        <div className='col1'>
          <div className='inputBox'>
            <input type="text" onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} required />
            <span className='text' style={{color:'white'}}>Email</span>
            <span className='line'></span>
          </div>
        </div>
        <div className='col1'>
          <div className='inputBox'>
            <input type="password" onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} required />
            <span className='text' style={{color:'white'}}>Password</span>
            <span className='line'></span>
          </div>
        </div>
        <div className={styles.footer}>
          <p className={styles.error}>{errorMsg}</p>
          <button onClick={handleSubmission} disabled={submitBtnDisabled}>Log In</button>
          <p>Don't have an account? {" "}
            <span>
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>

    </div>
  )
}
