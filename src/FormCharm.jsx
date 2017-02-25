import React from 'react'
import Restler from 'restler'

export default class FormCharm extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {}
    }

    submit() {

        const submissionData = {
            data: this.props.data,
            replyTo: this.props.replyTo,
            sendCopy: this.props.sendCopy,
            formName: this.props.formName,
            inbox: this.props.inbox
        }

        console.log('Submission Data: %s' , JSON.stringify(submissionData))

        Restler.post('https://api.formcharm.com/1/functions/submit', {
            headers: {
                'Content-Type': 'application/json',
                'X-Parse-Application-Id': '7Lvyr951Bg'
            },
            data: JSON.stringify(submissionData)
        }).on('complete', function(data, response) {
            if (response.statusCode === 200) {
                if (data.result === 'SENT') {
                    // Send success
                    this.props.callback()
                } else {
                    // Odd error
                }
            } else {
                // Was most likely an error
                // Handle it
            }
        });

    }

    render() {
        return (
            <div onClick={() => this.submit()} style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}

FormCharm.propTypes = {
    callback: React.PropTypes.object,
    style: React.PropTypes.object,
    data: React.PropTypes.object,
    replyTo: React.PropTypes.boolean,
    sendCopy: React.PropTypes.boolean,
    inbox: React.PropTypes.string,
    formName: React.PropTypes.string
}
