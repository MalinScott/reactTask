// AddUser.js
import "../addUser.css"
import React, { useState } from 'react';
import axios from 'axios';
const api = axios.create({
  baseURL: 'https://api-how-much-do-you-know-node.herokuapp.com',
  responseType: "json"
})



/***************************************
 * ADDUSER:
 *  This Function controls the state for 
 *  the adduser form. After Inout has been validated
 *  a post request is made to the api.
 **************************************/
const AddUser = () => {
  const [state, setState] = useState({
    first_name: null,
    last_name: null,
    email: null,
    occupation: null
  })

  //Status messages returns the api message after successful post.
  const [statusMessage, setMessage] = useState("");

  // errors holds the values for each error type.
  const [errors, setErrors] = useState({
    fName: '',
    lName: '',
    email: '',
    occupation: '',
  })

  //isValid = true if form has been validated
  const [isValid, validateForm] = useState({
    validFName: false,
    validLName: false,
    validEmail: false,
    validOccupation: false
  });

  // disable submit and control font color of api call message
  const [validForm, setValidation] = useState(false);
  const [apiCall, setCall] = useState(false);

  /***************************************
   *  HANDLE CHANGE:
   *  This function updates the state / 
   *  checks for input validation.
   **************************************/
  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
    validateInput(e);
  }

  /***************************************
   *  POST USER:
   *  This function makes an axios.post call
   *  to the api. Then it sets the appropriate 
   *  message returned from the api.
   **************************************/
  const postUser = async () => {
    await api.post('user/add-user', { first_name: state.first_name, last_name: state.last_name, email: state.email, occupation: state.occupation })
      .then(res => {
        console.log(res);
        setCall(true);
        setMessage(res.data.message);
      })
      .catch(error => {
        console.log(error);
        setCall(false);
        setMessage("Sorry, something went wrong! Please try again later");
      })
  }

  /***************************************
   *  VALIDATE INPUT:
   *  This function checks the input fields
   *  for the requirments and displays a 
   *  message if they are not validated. 
   **************************************/
  const validateInput = (event) => {
    const validEmailRegex = RegExp(/\S+@\S+\.\S+/);
    //event.preventDefault();
    const { name, value } = event.target;
    let err = errors;

    switch (name) {
      case 'first_name':
        if (value.length < 4) {
          err.fName = 'Last Name must be 4 characters long!';
          validateForm({ ...isValid, validFName: false });
        }
        else {
          err.fName = '';
          validateForm({ ...isValid, validFName: true });
        }
        break;
      case 'last_name':
        if (value.length < 4) {
          err.lName = 'Last Name must be 4 characters long!';
          validateForm({ ...isValid, validLName: false });
        }
        else {
          err.lName = '';
          validateForm({ ...isValid, validLName: true });
        }
        break;
      case 'email':
        if (!validEmailRegex.test(value)) {
          err.email = 'Valid email required!';
          validateForm({ ...isValid, validEmail: false });
        }
        else {
          err.email = '';
          validateForm({ ...isValid, validEmail: true });
        }
        break;
      case 'occupation':
        if (value.length === 0) {
          err.occupation = 'Occupation is required!';
          validateForm({ ...isValid, validOccupation: false });
        }
        else {
          err.occupation = '';
          validateForm({ ...isValid, validOccupation: true });
        }
        break;
      default:
        break;
    }

    let hasError = false;
    for (const item in isValid) {
      if (isValid[item] === false) {
        hasError = true;
      }
    }

    if (hasError)
      setValidation(false);
    else
      setValidation(true);
  }

  /***************************************
   * HANDLE SUBMIT:
   *  This function prevents page refresh and
   *  calls postUser() to handle the api submission.
   **************************************/
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Info", state.first_name, " ", state.last_name, " ", state.email);
    postUser();
  }

  return (
    <div className='wrapper'>
      <div className='form-wrapper'>
        <div className="form-title">
          <h1>Add User Form</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="fName">
            <label>
              First Name:{" "}
              <input type="text" name="first_name" value={state.first_name} onChange={handleChange} required />
              {errors.fName != null &&
                <span className='error'>{errors.fName}</span>}
            </label>{" "}
          </div>
          <div className="lName">
            <label>
              Last Name:{" "}
              <input type="text" name="last_name" value={state.last_name} onChange={handleChange} required />
              {errors.lName.length > 0 &&
                <span className='error'>{errors.lName}</span>}
              <br></br>
            </label>
          </div>
          <div className="email">
            <label>
              Email:{" "}
              <input type="text" name="email" value={state.email} onChange={handleChange} required />
              {errors.email.length > 0 &&
                <span className='error'>{errors.email}</span>}
              <br></br>
            </label>
          </div>
          <div className="occupation">
            <label>
              Occupation:{" "}
              <input type="text" name="occupation" value={state.occupation} onChange={handleChange} required />
              {errors.occupation.length > 0 &&
                <span className='error'>{errors.occupation}</span>}
              <br></br>
            </label>
          </div>
          <div className="submit">
            <h5 className={apiCall ? 'validCall' : 'invalidCall'}> {statusMessage}</h5>
            <button disabled={!validForm}>Add User</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddUser;