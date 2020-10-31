import { ErrorMessage, Field } from 'formik';
import React from 'react';

const Experience = props => {

    return (
        <div className='form-row col'>
            <div className='form-row col'>
                <div className='form-group col'>
                    <Field
                        className={`form-control ${props.errors.experience &&
                            props.errors.experience.companyName ? 'is-invalid' : ''}`}
                        name='experience.companyName'
                        placeholder='Company' />
                    <ErrorMessage name='experience.companyName'>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
                </div>
                <div className='form-group col'>
                    <Field
                        className={`form-control ${props.errors.experience &&
                                props.errors.experience.position ? 'is-invalid' : ''}`}
                        name='experience.position'
                        placeholder='Position' />
                    <ErrorMessage name='experience.position'>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
                </div>
                <div className='form-group col-md-2'>
                    <Field
                        className={`form-control ${props.errors.experience &&
                                props.errors.experience.startYear ? 'is-invalid' : ''}`}
                        type='number'
                        min='1917'
                        name='experience.startYear'
                        placeholder='Start year'
                    />
                    <ErrorMessage name='experience.startYear'>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
                </div>
                <div className='form-group col-md-2'>
                    <Field
                        className={`form-control ${props.errors.experience &&
                                props.errors.experience.endYear ? 'is-invalid' : ''}`}
                        type='number'
                        min='1917'
                        name='experience.endYear'
                        placeholder='End Year' />
                    <ErrorMessage name='experience.endYear'>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
                </div>
            </div>
            <div className='form-group col-md-12'>
                <Field
                    className={`form-control ${props.errors.experience &&
                            props.errors.experience.description ? 'is-invalid' : ''}`}
                    name='experience.description'
                    placeholder='Description' />
                <ErrorMessage name='experience.description'>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
            </div>
        </div>
    );
}

export default Experience;