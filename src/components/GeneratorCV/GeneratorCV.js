import React from 'react';
import { Form, Formik } from 'formik';

import About from './About/About';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';

import { schema } from './validationSchema';

const GeneratorCV = props => {
    return (
        <>
            <h1 className='col-9 text-primary mt-4 display-4'>Generate your CV</h1>
            <Formik
                initialValues={props.cv}
                onSubmit={values => props.setCV(values)}
                validationSchema={schema}
            >
                {
                    props => (
                        <Form className='form-group mt-3 pt-4 alert alert-primary shadow'>
                            <h2><span className='text-danger'>#</span> About:</h2>
                            <About errors={props.errors} />
                            <hr />

                            <h2 className='mb-4 mt-4'><span className='text-danger'>#</span> Skills:</h2>
                            <Skills errors={props.errors} array={props.values.skills} />
                            <hr />

                            <h2 className='mb-4 mt-4'><span className='text-danger'>#</span> Experience:</h2>
                            <Experience errors={props.errors} />

                            <h4 className='mb-4'>Projects:</h4>
                            <Projects errors={props.errors} array={props.values.experience.projects} />
                            <hr />

                            {
                                !props.isValid ?
                                    <div className='alert alert-danger'>The form cannot be submitted</div>
                                    :
                                    <button
                                        className='btn btn-success btn-block'
                                        type='submit'
                                    ><h4>Send</h4></button>
                            }
                        </Form>
                    )}
            </Formik>
        </>
    );
}

export default GeneratorCV;