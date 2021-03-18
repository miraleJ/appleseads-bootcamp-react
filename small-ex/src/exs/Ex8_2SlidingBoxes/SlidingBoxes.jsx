import React from 'react'
import Box from './Box'

class SlidingBoxes extends React.Component {
    state = {display : 'block'}

    componentDidMount() {
        setTimeout(() => {
            this.setState({display: 'none'})
          }, 4000)
    }

    render() {
        return (
            <div style={{display : this.state.display}}>
                <Box cName='box1' size={50}/>
                <Box cName='box2' size={150}/>
                <Box cName='box3' size={100}/>
            </div>
        )
    }
}

export default SlidingBoxes;