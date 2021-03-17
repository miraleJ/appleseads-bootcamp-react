import React from 'react'
import './style.css'

class BoxAndButton extends React.Component {
    state = {
        appearance : true,
        display: 'block'
        
    };

    getDisplay() {
        const displayStyle = {
            display: this.state.appearance ? 'block' : 'none'
        }
        return displayStyle;
    }

    render () {
        return (
            <div>
                <button onClick={e => this.setState({ appearance : !this.state.appearance })}>
                    To Be Or Not To Be?
                </button>
                <div className='box' style={this.getDisplay()}></div>
            </div>
        )
    }
}

export default BoxAndButton;