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
                question: '',
                'Lorem ipsum, time to go to the tripsome yeah yeah yeah': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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

                    <FormCharm inbox="rory@apollo27.com" formName="FormCharm Example" data={this.state.formFields} className="formCharm" submitter={this.state.formFields.email} replyTo={true} sendCopies={['rorz@me.com','rorz44@me.com']} callback={this.handleSubmission}>
                        <a>Submit To FormCharm!</a>
                    </FormCharm>
                </div>
            </div>
        )
    }
}
