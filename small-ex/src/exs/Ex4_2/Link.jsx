import React from 'react'

// const Link = (props) => {
//     return (
//         <div>
//             <a className='link' href={`${props.address}`}>Link </a>
//             <br/>
//         </div>
//     )
// }

class Link extends React.Component {
    render() {
        return (
            <div>
                <a className='link' href={`${this.props.address}`}>Link </a>
                <br/>
            </div>
        )
    }
}

export default Link;