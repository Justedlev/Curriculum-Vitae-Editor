import { ErrorMessage, Field } from 'formik';
import React from 'react';

const About = props => {
    return (
        <div className='form-row'>
            <div className='form-group col-md-6'>
                <Field
                    className={`form-control ${props.errors.name ? 'is-invalid' : ''}`}
                    name='name'
                    placeholder='Name'
                />
                <ErrorMessage name='name'>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
            </div>

            <div className='form-group col-md-6'>
                <Field
                    className={`form-control ${props.errors.surname ? 'is-invalid' : ''}`}
                    name='surname'
                    placeholder='Surname' />
                <ErrorMessage name='surname'>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
            </div>

            <div className='form-group col'>
                <Field
                    className={`form-control ${props.errors.description ? 'is-invalid' : ''}`}
                    name='description'
                    placeholder='Describe yourself' />
                <ErrorMessage name='description'>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
            </div>
        </div>
    );
}

export default About;