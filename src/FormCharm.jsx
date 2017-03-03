import React from 'react'
import Restler from 'restler'

export default class FormCharm extends React.Component {

    submit() {

        const submissionData = {
            data: this.props.data,
            submitter: this.props.submitter,
            replyTo: this.props.replyTo,
            formName: this.props.formName,
            inbox: this.props.inbox
        }

        const callback = this.props.callback || null

        Restler.post('https://api.formcharm.com/1/functions/submit', {
            headers: {
                'Content-Type': 'application/json',
                'X-Parse-Application-Id': '7Lvyr951Bg'
            },
            data: JSON.stringify(submissionData)
        }).on('complete', function(data, response) {
            if (response.statusCode === 200) {
                if (data.result === 'MESSAGE_SEND_OK') {
                    // Send success
                    if (callback) {callback()}
                } else {
                    // Odd error
                    console.log('odd error: ' + data.result)

                }
            } else {
                // Handle the error
                console.log(response.rawEncoded)
                console.log('big error: ' + response.result)
            }
        });

    }

    render() {
        return (
            <div onClick={() => this.submit()} style={this.props.style} className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}

FormCharm.propTypes = {
    // Event Handling:
    callback: React.PropTypes.func, // Callback upon request returning — sends a response and an error object (if necessary)

    // Styling:
    style: React.PropTypes.object, // Style props passed to the wrapper
    className: React.PropTypes.string, // Classname prop passed to the wrapper

    // Admin-Side:
    inbox: React.PropTypes.string.isRequired, // Email address to receive submissions to (REQUIRED)
    formName: React.PropTypes.string, // PRO FEATURE — Name of this particular form instance (as to appear in subject line of submission)
    replyTo: React.PropTypes.bool, // PRO FEATURE — Sets 'reply-to' in the email header so that you can reply directly to the submitter from your email client (SUBMITTER prop REQUIRED)

    // Form Data:
    submitter: React.PropTypes.string, // Email address of user submitting the form — Not required but, highly recommended (for your own sake)
    data: React.PropTypes.object, // Contains all the custom form data

    // Submitter-Side:
    sendConfirmation: React.PropTypes.bool // PRO FEATURE — Sends a confirmation summary to the submitter (SUBMITTER prop REQUIRED)
}
