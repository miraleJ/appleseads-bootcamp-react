import React from 'react'

// const Description = (props) => {
//     return (
//         <p className='description'>
//             {props.desc}
//         </p>
//     )
// }

class Description extends React.Component {
    render() {
        return (
            <p className='description'>
                {this.props.desc}
            </p>
        )
    }
}

export default Description;