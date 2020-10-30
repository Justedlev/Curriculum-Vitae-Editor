import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ViewCV from './components/ViewCV/ViewCV';
import GeneratorCV from './components/GeneratorCV/GeneratorCV';

export default class App extends React.Component {
  state = {
    isViewCV: true,
    cv: {
      isEdit: false,
      name: 'Name',
      surname: 'Surname',
      description: 'Description',
      skills: [
        {
          list: 'Skill list',
          title: 'Skill title'
        }
      ],
      experience: {
        startYear: 1917,
        endYear: 1917,
        companyName: 'Company',
        position: 'Position',
        description: 'Description',
        projects: [{
          projectName: 'Project name',
          projectDescription: 'Project description'
        }]
      }
    }
  }

  setCV = cv => {
    this.setState({ ...this.state, cv: { ...cv, isEdit: true }, isViewCV: true });
  }

  render() {
    return (
      <div className='container'>
        {
          this.state.isViewCV ?
            <>
              <div className='row mt-5'>
                <h1 className='col-9 text-primary display-3'><strong>My Curriculum Vitae</strong></h1>
                <button className='col-3 btn btn-primary btn-lg' onClick={() => this.setState({ ...this.state, isViewCV: false })}><h1>Edit</h1></button>
              </div>
              <hr />
              {
                this.state.cv.isEdit ? <ViewCV cv={this.state.cv} /> : null
              }
            </>
            :
            <GeneratorCV cv={this.state.cv} setCV={this.setCV} />
        }
      </div>
    );
  }
}
