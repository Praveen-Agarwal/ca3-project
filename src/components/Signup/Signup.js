import React from 'react'
import styles from './Signup.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../Firebase'

export default function SignUp(props) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  })
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill All Fields")
      return;
    }
    setErrorMsg("")
    setSubmitBtnDisabled(true)
    createUserWithEmailAndPassword(auth, values.email, values.pass).then((res) => {
      const user = res.user;
      updateProfile(user, {
        displayName: values.name
      })
      props.signout();
    }).catch((err) => {
      setSubmitBtnDisabled(false)
      setErrorMsg(err.message)
    })

  }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Sign Up</h1>

        <div className='col1'>
          <div className='inputBox'>
            <input type="text" onChange={(event) =>setValues((prev) => ({ ...prev, name: event.target.value }))} required />
            <span className='text' style={{ color: 'white' }}>Name</span>
            <span className='line'></span>
          </div>
        </div>
        <div className='col1'>
          <div className='inputBox'>
            <input type="text" onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} required />
            <span className='text' style={{ color: 'white' }}>Email</span>
            <span className='line'></span>
          </div>
        </div>
        <div className='col1'>
          <div className='inputBox'>
            <input type="password" onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} required />
            <span className='text' style={{ color: 'white' }}>Password</span>
            <span className='line'></span>
          </div>
        </div>
        <div className={styles.footer}>
          <p className={styles.error}>{errorMsg}</p>
          <button onClick={handleSubmission} disabled={submitBtnDisabled}>Sign Up</button>
          <p>Already have an account? {" "}
            <span>
              <Link to="/">Log In</Link>
            </span>
          </p>
        </div>
      </div>

    </div>
  )
}
