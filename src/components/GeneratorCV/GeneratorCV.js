import React from 'react';
import { getIn, Field, FieldArray, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

const yearNow = new Date().getFullYear();

const schema = yup.object().shape({
    name: yup.string()
        .min(2, 'The name must be more than one letter').required('Required field'),
    surname: yup.string().min(2, 'The surname must be more than one letter').required('Required field'),
    description: yup.string().min(10, 'Too short description').max(100, 'Too long').required('Required field'),
    skills: yup.array().of(
        yup.object().shape({
            list: yup.string().min(4, 'Too short skill').max(50, 'Too long').required('Required field'),
            title: yup.string().min(4, 'Too short skill title').max(50, 'Too long').required('Required field'),
        })),
    experience: yup.object().shape({
        startYear: yup.number().min(1917, 'Wrong year!').max(yearNow, 'You cannot enter a year after 2020').required('Required field'),
        endYear: yup.number().min(1917, 'Wrong year!').max(yearNow, 'You cannot enter a year after 2020').required('Required field'),
        companyName: yup.string().min(4, 'Too short skill').max(50, 'Too long').required('Required field'),
        position: yup.string().min(4, 'Too short skill').max(50, 'Too long').required('Required field'),
        description: yup.string().min(4, 'Too short skill').max(50, 'Too long').required('Required field'),
        projects: yup.array().of(
            yup.object().shape({
                projectName: yup.string().min(4, 'Too short skill').max(50, 'Too long').required('Required field'),
                projectDescription: yup.string().min(4, 'Too short skill').max(50, 'Too long').required('Required field')
            }))
    })
});

const GeneratorCV = props => {
    return (
        <>
            <h1 className='mt-4'>Generate your CV</h1>
            <Formik
                initialValues={props.cv}
                onSubmit={values => props.setCV(values)}
                validationSchema={schema}
            >
                {
                    props => (
                        <Form className='form-group mt-3 pt-4 jumbotron shadow'>
                            <div>
                                <h2># About:</h2>
                                <div className='form-row'>
                                    <div className='form-group col-md-6'>
                                        <Field
                                            className={`form-control ${props.touched.name && props.errors.name ? 'is-invalid' : ''}`}
                                            name='name'
                                            placeholder='Name'
                                        />
                                        <ErrorMessage name='name'>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
                                    </div>

                                    <div className='form-group col-md-6'>
                                        <Field
                                            className={`form-control ${props.touched.surname && props.errors.surname ? 'is-invalid' : ''}`}
                                            name='surname'
                                            placeholder='Surname' />
                                        <ErrorMessage name='surname'>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
                                    </div>

                                    <div className='form-group col'>
                                        <Field
                                            className={`form-control ${props.touched.description && props.errors.description ? 'is-invalid' : ''}`}
                                            name='description'
                                            placeholder='Describe yourself' />
                                        <ErrorMessage name='description'>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
                                    </div>
                                </div>
                            </div>
                            <hr />

                            <div>
                                <h2 className='mb-4 mt-4'># Skills:</h2>
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
                                                                        className={`form-control ${touchedTitle && errorTitle ? 'is-invalid' : ''}`}
                                                                        name={nameTitle}
                                                                        placeholder='Type skill title' />
                                                                    <ErrorMessage name={nameTitle}>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
                                                                </div>
                                                                <div className='form-group col'>
                                                                    <Field
                                                                        className={`form-control ${touchedList && errorList ? 'is-invalid' : ''}`}
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
                                            </ul>
                                        )
                                    }
                                </FieldArray>
                            </div>
                            <hr />

                            <div>
                                <h2 className='mb-4 mt-4'># Experience:</h2>
                                <div className='form-row col'>
                                    <div className='form-row col'>
                                        <div className='form-group col'>
                                            <Field
                                                className={`form-control ${props.touched.experience &&
                                                    props.errors.experience &&
                                                    props.touched.experience.companyName &&
                                                    props.errors.experience.companyName ? 'is-invalid' : ''}`}
                                                name='experience.companyName'
                                                placeholder='Company' />
                                            <ErrorMessage name='experience.companyName'>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
                                        </div>
                                        <div className='form-group col'>
                                            <Field
                                                className={`form-control ${props.touched.experience &&
                                                    props.errors.experience &&
                                                    props.touched.experience.position &&
                                                    props.errors.experience.position ? 'is-invalid' : ''}`}
                                                name='experience.position'
                                                placeholder='Position' />
                                            <ErrorMessage name='experience.position'>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
                                        </div>
                                        <div className='form-group col-md-2'>
                                            <Field
                                                className={`form-control ${props.touched.experience &&
                                                    props.errors.experience &&
                                                    props.touched.experience.startYear &&
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
                                                className={`form-control ${props.touched.experience &&
                                                    props.errors.experience &&
                                                    props.touched.experience.endYear &&
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
                                            className={`form-control ${props.touched.experience &&
                                                props.errors.experience &&
                                                props.touched.experience.description &&
                                                props.errors.experience.description ? 'is-invalid' : ''}`}
                                            name='experience.description'
                                            placeholder='Description' />
                                        <ErrorMessage name='experience.description'>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
                                    </div>
                                </div>
                            </div>
                            <hr />

                            <div>
                                <h2 className='mb-4 mt-4'># Projects:</h2>
                                <FieldArray name='experience.projects'>
                                    {
                                        arrayHelpers => (
                                            <ul>
                                                {
                                                    props.values.experience.projects.map((s, index) => {
                                                        const nameProjectName = `experience.projects.${index}.projectName`;
                                                        const nameProjectDescription = `experience.projects.${index}.projectDescription`;
                                                        const errorProjectName = getIn(props.errors, nameProjectName);
                                                        const errorProjectDescription = getIn(props.errors, nameProjectDescription);
                                                        const touchedProjectName = getIn(props.touched, nameProjectName);
                                                        const touchedProjectDescription = getIn(props.touched, nameProjectDescription);

                                                        return (
                                                            <li className='form-row' key={index}>
                                                                <div className='form-group col'>
                                                                    <Field
                                                                        className={`form-control ${touchedProjectName && errorProjectName ? 'is-invalid' : ''}`}
                                                                        name={nameProjectName}
                                                                        placeholder='Type project name' />
                                                                    <ErrorMessage name={nameProjectName}>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
                                                                </div>
                                                                <div className='form-group col'>
                                                                    <Field
                                                                        className={`form-control ${touchedProjectDescription && errorProjectDescription ? 'is-invalid' : ''}`}
                                                                        name={nameProjectDescription}
                                                                        placeholder='Type project description' />
                                                                    <ErrorMessage name={nameProjectDescription}>{msg => <span className='invalid-feedback'>{msg}</span>}</ErrorMessage>
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
                            </div>
                            <hr />

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
        </>
    );
}

export default GeneratorCV;