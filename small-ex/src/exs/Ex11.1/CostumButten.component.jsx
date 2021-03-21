import React from 'react'

class costumButton extends React.Component {
    render() {
        return (
            <button 
                style={{
                    backgroundColor : this.props.color,
                    borderRadius : '50px',
                    margin : '20px'
                }}
                onClick={() => { this.props.parentHandler(this.props.color) }}
            >
                {this.props.color} is My Color!
            </button>
        );
    };
}

export default costumButton;