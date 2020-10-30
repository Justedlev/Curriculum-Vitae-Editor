import React from 'react';
import { getIn, Field, FieldArray, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string()
        .min(2, 'The name must be more than one letter')
        .required('Required field'),
    surname: yup.string()
        .min(2, 'The surname must be more than one letter')
        .required('Required field'),
    description: yup.string()
        .min(10, 'Too short description')
        .max(100, 'Too long')
        .required('Required field'),
    skills: yup.array().of(
        yup.object().shape({
            list: yup.string()
                .min(4, 'Too short skill')
                .max(50, 'Too long')
                .required('Required field'),
            title: yup.string()
                .min(4, 'Too short skill title')
                .max(50, 'Too long')
                .required('Required field'),
        }))
});

const GeneratorCV = props => {
    return (
        <Formik
            initialValues={props.cv}
            onSubmit={values => props.setCV(values)}
            validationSchema={schema}
        >
            {
                props => (
                    <Form className='form-group mt-5 jumbotron shadow'>
                        <h1 className='mb-4'>Generate your CV</h1>
                        <hr />
                        <div className='form-row'>
                            <div className='form-group col-md-6'>
                                <Field
                                    className={`form-control ${props.touched.name && props.errors.name ? 'is-invalid' : null}`}
                                    name='name'
                                    placeholder='Name'
                                />
                                <ErrorMessage name='name'>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
                            </div>

                            <div className='form-group col-md-6'>
                                <Field
                                    className={`form-control ${props.touched.surname && props.errors.surname ? 'is-invalid' : null}`}
                                    name='surname'
                                    placeholder='Surname' />
                                <ErrorMessage name='surname'>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
                            </div>

                            <div className='form-group col'>
                                <Field
                                    className={`form-control ${props.touched.description && props.errors.description ? 'is-invalid' : null}`}
                                    name='description'
                                    placeholder='Describe yourself' />
                                <ErrorMessage name='description'>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
                            </div>
                        </div>

                        <div>
                            <h1 className='mb-4 mt-4'>Skills</h1>
                            <FieldArray name='skills'>
                                {
                                    arrayHelpers => (
                                        <ul>
                                            {
                                                props.values.skills.map((s, index) => {
                                                    const nameTitle = `skills.${index}.title`;
                                                    const nameList = `skills.${index}.list`;
                                                    const errorTitle = getIn(props.errors, nameTitle);
                                                    const errorList = getIn(props.errors, nameList);
                                                    const touchedTitle = getIn(props.touched, nameTitle);
                                                    const touchedList = getIn(props.touched, nameList);

                                                    return (
                                                        <li className='form-row' key={index}>
                                                            <div className='form-group col'>
                                                                <Field
                                                                    className={`form-control ${touchedTitle && errorTitle ? 'is-invalid' : null}`}
                                                                    name={nameTitle}
                                                                    placeholder='Type skill title' />
                                                                <ErrorMessage name={nameTitle}>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
                                                            </div>
                                                            <div className='form-group col'>
                                                                <Field
                                                                    className={`form-control ${touchedList && errorList ? 'is-invalid' : null}`}
                                                                    name={nameList}
                                                                    placeholder='Type list of skills' />
                                                                <ErrorMessage name={nameList}>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
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
                                            <hr />
                                        </ul>
                                    )
                                }
                            </FieldArray>
                        </div>
                        {
                            !props.isValid ?
                                <div className='alert alert-danger'>The form cannot be submitted</div>
                                :
                                <button
                                    className='btn btn-success'
                                    type='submit'
                                >Send</button>
                        }
                    </Form>
                )}
        </Formik>
    );
}

export default GeneratorCV;