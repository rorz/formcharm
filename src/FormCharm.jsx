import React from 'react'

export default class FormCharm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    submit() {

    }

    render() {
        return (
            <div onClick={() => this.submit()} style={this.props.style} data={this.props.data} replyTo={this.props.replyTo || true} sendCopy={this.props.sendCopy || false} inbox={this.props.inbox} formName={this.props.formName}>
                {this.props.children}
            </div>
        )
    }
}

FormCharm.propTypes = {
    style: React.PropTypes.object,
    data: React.PropTypes.object,
    replyTo: React.PropTypes.boolean,
    sendCopy: React.PropTypes.boolean,
    inbox: React.PropTypes.string,
    formName: React.PropTypes.string
}
