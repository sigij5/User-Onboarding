import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import * as Yup from 'yup'
import axios from 'axios';



const formSchema = Yup.object().shape({
  name: Yup
  .string()
  .min(3, "Names must be at least 3 characters long."),
  email: Yup
    .string()
    .email("Must be a valid email address.")
    .required("Please enter an email address."),
  password: Yup
    .string()
    .min(6, "Passwords must be at least 6 characters long.")
    .required("Please enter a password"),
  terms: Yup
    .boolean()
    .oneOf([true], "You must accept Terms and Conditions to continue")
    // required isn't required for checkboxes.
});

const initialFormValues = {
  name: '',
  email:'',
  password:'',
  terms:'',
}

const initialFriends =[]
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}

const initialDisabled = true



function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [users, setUsers] = useState(initialFriends)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([...users, res.data])
      })
      .catch(err =>{
        debugger
      })
  }

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data.data)
      })
      .catch(err =>{
        debugger
      })
  }

  const onInputChange = event => {
    const { name, value } = event.target
    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors, 
          [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      });
    })

    setFormValues({
      ...formValues, 
      [name]: value
    })
  }

  const onCheckboxChange = event => {
    const { name, checked } = event.target

    setFormValues({
      ...formValues,
      [name]: checked,
    })
  }

  const onSubmit = event => {
    event.preventDefault()

    const newUser = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      terms: formValues.terms
    }

    postNewUser(newUser)
    setFormValues(initialFormValues)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues])


  return (
    <div className="App">
        <Form 
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        errors={formErrors}
        disabled={disabled}
        />
        <h3>Users:</h3>
        {users.map(user => {
          return (
            <div>
              {/* <h4>{user.name}</h4> */}
              <p>{JSON.stringify(user)}</p>
            </div>  
          )
        })}
    </div>
  );
}

export default App;
