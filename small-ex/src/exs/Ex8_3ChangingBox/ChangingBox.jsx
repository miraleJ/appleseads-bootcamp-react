import React from 'react'
import '../Ex8_2SlidingBoxes/boxStyle.css'

class ChangingBox extends React.Component {
    state = {
        backgroundColor : '#' +  Math.random().toString(16).substr(-6),
        numOfChanges : 0,
        borderRadius : '0px'
    }

    componentDidMount() {
        setInterval(() => { 
            this.setState({
                backgroundColor:'#' +  Math.random().toString(16).substr(-6),
                numOfChanges: this.state.numOfChanges + 1
            }) ;
            if (this.state.numOfChanges >= 5 && this.state.borderRadius === '0px') {
                this.setState({borderRadius : '50px'})
            }
        }, 500);
    }

    render () {
        return (
            <div className='box' style={{
                backgroundColor : this.state.backgroundColor,
                borderRadius : this.state.borderRadius
            }}></div>

        )
    }
}

export default ChangingBox;