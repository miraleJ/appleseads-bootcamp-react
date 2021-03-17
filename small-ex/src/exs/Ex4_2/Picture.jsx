import React from 'react'

// const Picture = (props) => {
//     return (
//         <img className='pic' src={`${props.pic}`} alt={props.alt} width="150" height="100" />
//     )
// }

class Picture extends React.Component {
    render() {
        return (
            <img className='pic' src={`${this.props.pic}`} alt={this.props.alt} width="150" height="100" />
        )
    }
}

export default Picture;