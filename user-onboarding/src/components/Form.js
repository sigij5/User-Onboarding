import React from 'react'





export default function Form(props) {
    const { values, onInputChange, onCheckboxChange, onSubmit, errors } = props


    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2>Add a User</h2>

                <button>submit</button>
            </div>

            <div className='form inputs'>
                <h4>Details</h4>

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
                        <p>{errors.email}</p>                
                </label>

                <label>Password:&nbsp;
                    <input 
                        name='password'
                        type='text'
                        value={values.password}
                        onChange={onInputChange}
                    />
                     <p>{errors.password}</p>                   
                </label>

                <label>Agree to Terms of Service:&nbsp;
                    <input 
                        name='terms'
                        type='checkbox'
                        value='true'
                        checked={values.terms===true}
                        onChange={onCheckboxChange}
                    />
                    <p>{errors.terms}</p>
                </label>
            </div>
        </form>


    )
}