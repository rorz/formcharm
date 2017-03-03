import React, {Component} from 'react';
import Update from 'react-addons-update'
import './App.css';
import FormCharm from './FormCharm.jsx'
import logo from './logo-spaced.png'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            formFields: {
                name: '',
                email: '',
                favoriteAnimal: '',
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

    handleSubmission(result, error) {
        if (error) {
            // handle error here
        }
        else {
            // handle success here
            alert('Submitted successfully');
        }
    }

    render() {
        return (
            <div className="App">
                <img src={logo} width="200" />
                <div className="formContainer">
                    <div className="formInput">
                        <h3>Name:</h3>
                        <input type="text" placeholder="Janette Johnson" onChange={(event, value) => this.updateFormComponent(event, 'name')} />
                    </div>
                    <div className="formInput">
                        <h3>Email:</h3>
                        <input type="email" placeholder="janette.johnson@example.com" onChange={(event, value) => this.updateFormComponent(event, 'email')} />
                    </div>
                    <div className="formInput">
                        <h3>Favorite Animal:</h3>
                        <select onChange={(event, value) => this.updateFormComponent(event, 'favoriteAnimal')}>
                            <option value="" disabled selected>Choose One</option>
                            <option value="cat">Cat</option>
                            <option value="dog">Dog</option>
                            <option value="emu">Emu</option>
                            <option value="penguin">Penguin</option>
                            <option value="other">Not Listed</option>
                        </select>
                    </div>
                    <div className="formInput">
                        <h3>Question:</h3>
                        <textarea placeholder="Enter details of your query here." onChange={(event, value) => this.updateFormComponent(event, 'question')} />
                    </div>

                    <FormCharm inbox="rory@apollo27.com" formName="FormCharm Example" data={this.state.formFields} className="formCharm" submitter={this.state.formFields.email} replyTo={true} callback={this.handleSubmission}>
                        <a>Submit To FormCharm!</a>
                    </FormCharm>
                </div>
            </div>
        )
    }
}
