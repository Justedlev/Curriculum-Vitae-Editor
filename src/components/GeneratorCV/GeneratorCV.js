import React from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

import About from './About/About';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';

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
                                <h2><span className='text-danger'>#</span> About:</h2>
                                <About errors={props.errors} />
                            </div>
                            <hr />

                            <div>
                                <h2 className='mb-4 mt-4'><span className='text-danger'>#</span> Skills:</h2>
                                <Skills errors={props.errors} array={props.values.skills}/>
                            </div>
                            <hr />

                            <div>
                                <h2 className='mb-4 mt-4'><span className='text-danger'>#</span> Experience:</h2>
                                <Experience errors={props.errors} />
                            </div>

                            <div>
                                <h4 className='mb-4 mt-4'>Projects:</h4>
                                <Projects errors={props.errors} array={props.values.experience.projects}/>
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