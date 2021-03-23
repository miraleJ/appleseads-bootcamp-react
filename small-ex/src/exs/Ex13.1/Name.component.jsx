import React from 'react'

class Name extends React.Component {
    render() {
        return (
            <div key={this.props.key}>{this.props.name}</div>
        )
    }
}

export default Name;