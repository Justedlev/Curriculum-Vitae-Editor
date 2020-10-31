import { ErrorMessage, Field, FieldArray, getIn } from 'formik';
import React from 'react';

const Skills = props => {
    return (
        <FieldArray name='skills'>
            {
                arrayHelpers => (
                    <ul>
                        {
                            props.array.map((s, index) => {
                                const nameTitle = `skills.${index}.list`;
                                const nameList = `skills.${index}.title`;
                                const errorTitle = getIn(props.errors, nameTitle);
                                const errorList = getIn(props.errors, nameList);

                                return (
                                    <li className='form-row' key={index}>
                                        <div className='form-group col'>
                                            <Field
                                                className={`form-control${errorTitle ? ' is-invalid' : ''}`}
                                                name={nameTitle}
                                                placeholder='Type skill title' />
                                            <ErrorMessage name={nameTitle}>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
                                        </div>
                                        <div className='form-group col'>
                                            <Field
                                                className={`form-control${errorList ? ' is-invalid' : ''}`}
                                                name={nameList}
                                                placeholder='Type list of skill' />
                                            <ErrorMessage name={nameList}>{msg => <span className=' invalid-feedback'>{msg}</span>}</ErrorMessage>
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
                            className='btn btn-primary mt-4'
                            type="button"
                            onClick={() => arrayHelpers.push('')}>Add row</button>
                    </ul>
                )
            }
        </FieldArray>
    );
}

export default Skills;