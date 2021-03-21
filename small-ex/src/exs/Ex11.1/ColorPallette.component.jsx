import React from 'react'
import CostumButton from './CostumButten.component'

class ColorPallette extends React.Component {
    state = {
        colors : ['blue', 'red', 'yellow'],
        backgroundColor : 'white'
    }

    onClickHandler = (childColor) => {
        this.setState({backgroundColor : childColor})
    }

    render () {
        return (
            <div className='pallette' style={{
                    display: 'flex',
                    backgroundColor : this.state.backgroundColor
                }}>
                <CostumButton color={this.state.colors[0]} parentHandler={this.onClickHandler.bind(this)} />
                <CostumButton color={this.state.colors[1]} parentHandler={this.onClickHandler.bind(this)} />
                <CostumButton color={this.state.colors[2]} parentHandler={this.onClickHandler.bind(this)} />
            </div>

        )
    }
}

export default ColorPallette;