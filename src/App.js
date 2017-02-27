import React, {Component} from 'react';
import Update from 'react-addons-update'
import './App.css';
import FormCharm from './FormCharm.jsx'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            formFields: {
                name: '',
                email: '',
                question: ''
            }
        }

        this.handleSubmission = this.handleSubmission.bind(this)
    }

    updateFormComponent(event, keyName) {
        const inputValue = event.target.value

        // http://stackoverflow.com/questions/35902946/reactjs-setstate-with-a-dynamic-key-value/35903522
        this.setState(Update(this.state, {
            formFields: {[keyName]:{$set:inputValue}}
        }))
    }

    handleSubmission(result) {
        console.log('callback')
        alert('Submitted success/fail-fully');
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>FormCharm Example</h2>
                </div>
                <div className="formContainer">
                    <input type="text" placeholder="name" onChange={(event, value) => this.updateFormComponent(event, 'name')} />
                    <input type="email" placeholder="email" onChange={(event, value) => this.updateFormComponent(event, 'email')} />
                    <input type="textarea" placeholder="question" onChange={(event, value) => this.updateFormComponent(event, 'question')} />
                    <input type="textarea" placeholder="playboy level" onChange={(event, value) => this.updateFormComponent(event, 'playboyLevel')} />

                    <FormCharm inbox="rory@johnstoneek.com" formName="FormCharm Example" data={this.state.formFields} className="formCharm" replyTo={this.state.formFields.email} sendCopies={['rorz@me.com','rorz44@me.com']} callback={this.handleSubmission}>
                        <a>Submit To FormCharm!</a>
                    </FormCharm>
                </div>
            </div>
        )
    }
}
