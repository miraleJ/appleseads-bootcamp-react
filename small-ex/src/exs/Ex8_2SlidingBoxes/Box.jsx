import React from 'react'
import './boxStyle.css'

class Box extends React.Component {
    state = {display : 'none'}

    componentDidMount() {
        setTimeout(() => {
            this.setState({display: "block"})
          }, 1000)
    }

    render() {
        return (
            <div 
                className={`box ${this.props.cName}`}
                id='animated_div'
                style={{
                    width : this.props.size,
                    height : this.props.size,
                    display : this.state.display
                }}
            >
            </div>
        )
    }
}

export default Box;