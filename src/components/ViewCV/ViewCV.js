import React from 'react';

const ViewCV = props => {
    console.log(props);
    return (
        <div className="alert alert-primary shadow">
            <h1 className='text-secondary display-4'><span className='text-danger'>#</span> About:</h1>
            <h1>{props.cv.name} {props.cv.surname}</h1>
            <h2>{props.cv.description}</h2>
            <hr />
            <h1 className='text-secondary display-4'><span className='text-danger'>#</span> Skills:</h1>
            {
                props.cv.skills.map((skill, index) => (
                    <h3 className='font-weight-normal' key={index}><strong>{skill.title}:</strong> {skill.list}</h3>
                ))
            }
            <hr />
            <h1 className='text-secondary display-4'><span className='text-danger'>#</span> Experience:</h1>
            <h1><strong>Company:</strong> {props.cv.experience.companyName}</h1>
            <h2><strong>Position:</strong> {props.cv.experience.position}</h2>
            <h3><strong>Start year:</strong> {props.cv.experience.startYear}</h3>
            <h3><strong>End year:</strong> {props.cv.experience.endYear}</h3>
            <span className='text-secondary' style={{fontSize: '2.3rem', fontWeight: '350'}}>Projects:</span>
            {
                props.cv.experience.projects.map((project, index) => (
                    <h3 className='font-weight-normal' key={index}><strong>{project.projectName}:</strong> {project.projectDescription}</h3>
                ))
            }
        </div>
    );
}

export default ViewCV;