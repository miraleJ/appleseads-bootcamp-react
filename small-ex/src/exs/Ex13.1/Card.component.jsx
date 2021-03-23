import React from 'react'
import './style.css'

class Card extends React.Component {
    render () {
        return (
            <div className='card'>
                <h2>
                    {this.props.title}
                </h2>
                <h3>
                    {this.props.info1}
                </h3>
                <p>{this.props.info2}</p>
                <p>{this.props.info3}</p>
            </div>
        )
    }
}

export default Card;