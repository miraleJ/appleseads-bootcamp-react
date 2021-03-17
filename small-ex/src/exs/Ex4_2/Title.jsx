import React from 'react'

// const Title = (props) => {
//     return (
//         <h2 className='title'>{props.title}</h2>
//     )
// }

class Title extends React.Component {
    render() {
        return (
            <h2 className='title'>{this.props.title}</h2>
        )
    }
}

export default Title;