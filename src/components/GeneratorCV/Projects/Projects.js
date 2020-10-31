import { ErrorMessage, Field, FieldArray, getIn } from 'formik';
import React from 'react';

const Projects = props => {
    return (
        <FieldArray name='experience.projects'>
            {
                arrayHelpers => (
                    <ul>
                        {
                            props.array.map((s, index) => {
                                const nameProjectName = `experience.projects.${index}.projectName`;
                                const nameProjectDescription = `experience.projects.${index}.projectDescription`;
                                const errorProjectName = getIn(props.errors, nameProjectName);
                                const errorProjectDescription = getIn(props.errors, nameProjectDescription);

                                return (
                                    <li className='form-row' key={index}>
                                        <div className='form-group col'>
                                            <Field
                                                className={`form-control${errorProjectName ? ' is-invalid' : ''}`}
                                                name={nameProjectName}
                                                placeholder='Type project name' />
                                            <ErrorMessage name={nameProjectName}>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
                                        </div>
                                        <div className='form-group col'>
                                            <Field
                                                className={`form-control${errorProjectDescription ? ' is-invalid' : ''}`}
                                                name={nameProjectDescription}
                                                placeholder='Description' />
                                            <ErrorMessage name={nameProjectDescription}>{msg => <span className=' invalid-feedback'>{msg}</span>}</ErrorMessage>
                                        </div>
                                        {
                                            index > 0 ? <button
                                                className='form-group btn btn-danger col-md-2'
                                                type="button"
                                                onClick={() => arrayHelpers.remove(index)}
                                            >remove</button> : null
                                        }
                                    </li>
                                )
                            }
                            )}
                        <button
                            className='btn btn-primary mt-4 pl-5 pr-5'
                            type="button"
                            onClick={() => arrayHelpers.push('')}>Add project</button>
                    </ul>
                )
            }
        </FieldArray>
    );
}

export default Projects;