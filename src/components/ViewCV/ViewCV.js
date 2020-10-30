import React from 'react';

const ViewCV = props => {
    return (
        <div className="jumbotron shadow">
            <h1>{props.cv.name} {props.cv.surname}</h1>
            <h2>{props.cv.description}</h2>
            <hr />
            {
                props.cv.skills.map((skill, index) => (
                    <h3 className='font-weight-normal' key={index}><strong>{skill.title}:</strong> {skill.list}</h3>
                ))
            }
        </div>
    );
}

export default ViewCV;