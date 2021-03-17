import React from 'react'

class ButtonAndLable extends React.Component {
    state = {counter : 0};
    
    render () {
        return (
            <div>
                <button onClick={e => this.setState({counter : this.state.counter + 1})}>increment</button>
                <label> {this.state.counter}</label>
            </div>
        )
    }
}

export default ButtonAndLable;