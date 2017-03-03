import React, {Component} from 'react';
import './App.css';
import FormCharm from './FormCharm.jsx'
import logo from './logo-spaced.png'

class ExampleForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
                name: '',
                email: '',
                favoriteAnimal: '',
                question: '',
                updateThem: ''
        }

        this.handleSubmission = this.handleSubmission.bind(this)
    }

    updateFormComponent(event, keyName) {
        const inputValue = event.target.value
        this.setState({
            [keyName]: inputValue
        })

        //  this is not necessary in standard implementation (used for demo text)
        this.props.updateParent(keyName, inputValue)

    }

    updateParent() {
        console.log(this.state)

    }

    handleSubmission(result, error) {
        if (error) {
            // handle error here
        } else {
            // handle success here
            alert('CALLBACK: Submitted successfully');
        }
    }

    render() {
        return (
            <div>
                <img src={logo} width="200"/>
                <h2>
                    <i>Demo</i>
                </h2>
                <div className="formContainer">
                    <div className="formInput">
                        <h3>Name:</h3>
                        <input type="text" placeholder="Janette Johnson" onChange={(event, value) => this.updateFormComponent(event, 'name')}/>
                    </div>
                    <div className="formInput">
                        <h3>Email:</h3>
                        <input type="email" placeholder="janette.johnson@example.com" onChange={(event, value) => this.updateFormComponent(event, 'email')}/>
                    </div>
                    <div className="formInput">
                        <h3>Favorite Animal:</h3>
                        <select onChange={(event, value) => this.updateFormComponent(event, 'favoriteAnimal')} defaultValue="choose">
                            <option value="choose">Choose One</option>
                            <option value="cat">Cat</option>
                            <option value="dog">Dog</option>
                            <option value="emu">Emu</option>
                            <option value="penguin">Penguin</option>
                            <option value="other">Not Listed</option>
                        </select>
                    </div>
                    <div className="formInput">
                        <h3>Question:</h3>
                        <textarea placeholder="Enter details of your query here." onChange={(event, value) => this.updateFormComponent(event, 'question')}/>
                    </div>
                    <div className="formInput noWidth">
                        <h3>Receive Updates?</h3>
                        <input type="checkbox" onChange={(event, value) => this.updateFormComponent(event, 'updateThem')}/>
                    </div>

                    {/*Set 'inbox' to yout email — YOU MUST VERIFY IT FIRST!!!*/}
                    <FormCharm inbox="rory@apollo27.com" formName="FormCharm Example" data={this.state} className="formCharm" submitter={this.state.email} replyTo={true} callback={this.handleSubmission}>
                        <a>Submit To FormCharm!</a>
                    </FormCharm>

                </div>
            </div>
        )
    }
}

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            formFields: {}
        }
    }


    render() {

        const formFields = this.state.formFields

        let displayFields = []

        for (const key in formFields) {
            if (formFields.hasOwnProperty(key)) {
                displayFields.push(
                    <p><strong>{key}</strong>: {formFields[key]}</p>
                )
            }
        }


        return (
            <div className="App">
                <ExampleForm updateParent={(state) => console.log(state)} />
                <div className="description">
                    <p>
                        <strong>SET THE 'INBOX' PROP ON FORMCHARM COMPONENT TO TEST</strong>
                        <br />
                        <br />
                        <br />
                        Use this demo to see how you can use FormCharm with ReactJS.
                        <br/><br/>
                        The only part of this form that uses the FormCharm component is the 'Submit' button — which is wrapped in
                        <span className="code"> FormCharm </span>
                        tags, and where the necessary props are provided.
                        <br/><br/>
                        The
                        <span className="code"> data </span>
                        prop of the FormCharm component is derived from the App's state, which stores the current values of all the inputs on the page.
                        <br/><br/>
                        You should update the App's state with the
                        <span className="code"> onChange </span>
                        method prop of every one of your inputs.
                    </p>
                    <hr />
                    <p>
                        <strong>Current App state</strong> (passed as 'data' to FormCharm)
                        <br/>
                        <br />

                        <strong>formFields</strong> {'{'}
                        {displayFields}
                        {'}'}
                    </p>
                </div>
            </div>
        )
    }
}
