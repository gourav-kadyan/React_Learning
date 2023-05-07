import React, { useState } from 'react'

const Form = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formerror, setFormerror] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = {}
        if( !email || !email.includes('@') ){
            errors.email = 'email is not valid'
        }
        if( !password || password.length < 4){
            errors.password = 'password is not valid'
        }
        setFormerror(errors)

        if(Object.keys(errors).length === 0){
            console.log("form is submitted")
            setEmail('')
            setPassword('')
            alert("Form is successfully submitted")
        }
    }

  return (
    <>
        <form action="" onSubmit={handleSubmit} >
            <label htmlFor="email">Email:
                <input type="text" placeholder='email' value={email} 
                onChange={(event) => (setEmail(event.target.value))}/>
            </label>
            {
                formerror && (
                    <p style={{color:'red'}} >{formerror && formerror.email}</p>
                )
            }
            <label htmlFor="password">Password:
                <input type="text" placeholder='password' value={password} 
                onChange={(event) => (setPassword(event.target.value))}/>
            </label>
            {
                formerror && (
                    <p style={{color:'red'}} >{formerror.password}</p>
                )
            }

            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default Form