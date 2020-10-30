import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ViewCV from './components/ViewCV/ViewCV';
import GeneratorCV from './components/GeneratorCV/GeneratorCV';

export default class App extends React.Component {
  state = {
    isViewCV: true,
    cv: {
      isEdit: false,
      name: '',
      surname: '',
      description: '',
      skills: [
        {
          list: '',
          title: ''
        }
      ]
    }
  }

  setCV = cv => {
    this.setState({ ...this.state, cv: {...cv, isEdit: true}, isViewCV: true });
  }

  render() {
    return (
      <div className='container'>
        {
          this.state.isViewCV ?
            <>
              <div className='row mt-5'>
                <h1 className='col-9'>Your CV</h1>
                <button className='col-3 btn btn-primary btn-lg' onClick={() => this.setState({ ...this.state, isViewCV: false })}>Edit</button>
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
