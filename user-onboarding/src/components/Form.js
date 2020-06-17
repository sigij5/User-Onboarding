import React from 'react'
import styled from 'styled-components'
import '../App.css';

const ErrorP = styled.p`
font-size: .7rem;
color: red;
`

const AppHeader = styled.header`
background-color:grey;
height:10vh;
align-items:center;
display:flex;
justify-content:center;
`

const Title = styled.h1`
text-transform: uppercase;
color:darkgreen;
`

const Submit = styled.button`
    width: 80px;
`




export default function Form(props) {
    const { values, onInputChange, onCheckboxChange, onSubmit, errors, disabled } = props


    return (
        <form onSubmit={onSubmit}>
            <AppHeader>
                <Title>Add a User</Title>
            </AppHeader>

            <div className='form inputs'>
                <h4>Information:</h4>

                <label>Name:&nbsp;
                    <input 
                        name='name'
                        type='text'
                        value={values.name}
                        onChange={onInputChange}
                    /> 
                </label>

                <label>Email:&nbsp;
                    <input 
                        name='email'
                        type='text'
                        value={values.email}
                        onChange={onInputChange}
                    />
                        <ErrorP>{errors.email}</ErrorP>                
                </label>

                <label>Password:&nbsp;
                    <input 
                        name='password'
                        type='text'
                        value={values.password}
                        onChange={onInputChange}
                    />
                     <ErrorP>{errors.password}</ErrorP>                   
                </label>

                <label>Agree to Terms of Service:&nbsp;
                    <input 
                        name='terms'
                        type='checkbox'
                        value='true'
                        checked={values.terms===true}
                        onChange={onCheckboxChange}
                    />
                    <ErrorP>{errors.terms}</ErrorP>
                </label>
                <Submit disabled={disabled}>submit</Submit>
            </div>
        </form>


    )
}