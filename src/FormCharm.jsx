import React from 'react'
import Restler from 'restler'

export default class FormCharm extends React.Component {

    submit() {

        const submissionData = {
            data: this.props.data,
            replyTo: this.props.replyTo,
            sendCopy: this.props.sendCopy,
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
                }
            } else {
                // Handle the error
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
    callback: React.PropTypes.func,

    style: React.PropTypes.object,
    className: React.PropTypes.string,

    inbox: React.PropTypes.string,
    formName: React.PropTypes.string,
    sendCopies: React.PropTypes.object,
    replyTo: React.PropTypes.bool,

    submitter: React.PropTypes.string,
    data: React.PropTypes.object,
    sendConfirmation: React.PropTypes.bool
}
