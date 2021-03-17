import React from 'react'
import './buttonsStyle.css'

// const Button = (props) => {
//     if (props.text === 'Important') {
//         return (
//             <button className='bold'>{props.text}</button>
//         )   
//     } else {
//         return (
//             <button>{props.text}</button>
//     )}
// }

class Button extends React.Component {
    render() {
        if (this.props.text === 'Important') {
            return (
                <button className='bold'>{this.props.text}</button>
            )   
        } else {
            return (
                <button>{this.props.text}</button>
        )}
    }
}

export default Button;