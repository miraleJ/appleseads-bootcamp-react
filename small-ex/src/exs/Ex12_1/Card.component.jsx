import React from 'react'
import Button from './Button.component'

class Card extends React.Component {
    render() {
        return (
            <div className='card'
                    style={{
                        width : '300px',
                        hight : '400px',
                        margin : 'auto',
                        borderRadius : '15px',
                        border : '2px solid black'
                    }}
            >
                <h2>{this.props.title}</h2>
                <h4>{this.props.desc}</h4>
                <Button text='Bring it on!' onClick={this.props.newJoke}></Button>
            </div>
        )        
    }
}

export default Card;