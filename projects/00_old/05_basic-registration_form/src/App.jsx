import './App.css'
import { useState } from 'react'

function App() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({...values, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div className='container'>

      <form className='register-form' onSubmit={handleSubmit}>

        {submitted && valid ? <div className='success-message'>Success! Thank you for registering.</div> : null}
        <input type='text' onChange={handleInputChange} value={values.firstName} placeholder='First Name' name='firstName'/>

        {submitted && !values.firstName ? <span className='error-message'>{values.firstName ? null : "First Name is required"}</span> : null}

        <input type='text' onChange={handleInputChange} value={values.lastName} placeholder='Last Name' name='lastName'/>

        {submitted && !values.lastName ? <span className='error-message'>{values.lastName ? null : "Last Name is required"}</span> : null}

        <input type='email' onChange={handleInputChange} value={values.email} placeholder='Email' name='email'/>

        {submitted && !values.email ? <span className='error-message'>{values.email ? null : "Email is required"}</span> : null}

        <button type='submit'>Register</button>

      </form>
      
    </div>
  )
}

export default App
