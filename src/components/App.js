import React from 'react'
import '../styles/App.css';
import { useState, useEffect } from 'react';
import { signUpFormValidation } from '../utils/validation';

const App = () => {

  const [formDetails, setFormDetails] = useState({
    "name": "",
    "email": "",
    "password": "",
    "isChecked": false
  });

  const formDetailsHandler = (event) => {
    const { id, value, type, checked } = event.target;

    setFormDetails((prevFormDetails) => {
      if (type === 'checkbox') {
        return {
          ...prevFormDetails,
          isChecked: checked
        };
      }
      else {
        return {
          ...prevFormDetails,
          [id]: value
        };
      }
    });

    if (formDetailsError[id]) {
      setFormDetailsError({
        ...formDetailsError,
        [id]: null
      })
    };

    console.log(id, value);
    console.log(checked);
  };

  const [formDetailsError, setFormDetailsError] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();

    const validationErros = signUpFormValidation(formDetails);

    setFormDetailsError(validationErros || {});
  }

  const { name, email, password, isChecked } = formDetails;
  return (
    <form className='form' onSubmit={submitHandler}>
      <div className='inputFields'>
        <label htmlFor='name'>Name: </label>
        <div className="input-error">
          <input type='text' name='name' id='name' value={name} onChange={formDetailsHandler} />
          <p>{formDetailsError?.name}</p>
        </div>
      </div>

      <div className='inputFields'>
        <label htmlFor='email'>Email: </label>
        <div className="input-error">
          <input type='email' name='email' id='email' value={email} onChange={formDetailsHandler} />
          <p>{formDetailsError?.email}</p>
        </div>
      </div>

      <div className='inputFields'>
        <label htmlFor='password'>Password: </label>
        <div className="input-error">
          <input type='password' name='password' id='password' value={password} onChange={formDetailsHandler} />
          <p>{formDetailsError?.password}</p>
        </div>
      </div>

      <div className='inputFields'>
        <label htmlFor='consent'>Consent: </label>
        <input type='checkbox' checked={isChecked} name='consent' id='consent' onChange={formDetailsHandler} />
      </div>

      <div className='btn'>
        <button type="submit" >Signup</button>
      </div>
    </form>

  )
}


export default App;
