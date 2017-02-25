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
    }

    updateFormComponent(event, keyName) {
        const inputValue = event.target.value

        // http://stackoverflow.com/questions/35902946/reactjs-setstate-with-a-dynamic-key-value/35903522
        this.setState(Update(this.state, {
            formFields: {[keyName]:{$set:inputValue}}
        }))
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>FormCharm Example</h2>
                </div>
                <p className="App-intro">
                    To get started, edit
                    <code>src/App.js</code>
                    and save to reload.
                </p>
                <input type="text" placeholder="name" onChange={(event, value) => this.updateFormComponent(event, 'name')} />
                <input type="email" placeholder="email" onChange={(event, value) => this.updateFormComponent(event, 'email')} />
                <input type="textarea" placeholder="question" onChange={(event, value) => this.updateFormComponent(event, 'question')} />

                <FormCharm inbox="rory@johnstoneek.com" formName="FormCharm Example" data={this.state.formFields} style={{borderStyle: 'solid', borderWidth: '1px', borderColor: '#aaa'}} replyTo={true} sendCopy={true}>
                    <a>Submit To FormCharm!</a>
                </FormCharm>
            </div>
        )
    }
}
