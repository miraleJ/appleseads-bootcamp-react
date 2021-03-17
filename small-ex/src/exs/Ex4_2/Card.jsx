import React from 'react'
import Picture from './Picture'
import Data from './Data'

// const Card = (props) => {
//     return (
//         <div className='card'>
//             <Picture picSrc={props.picSrc} alt={props.desc} />
//             <Data
//                 title={props.title}
//                 desc={props.desc}
//                 link1={props.link1}
//                 link2={props.link2}
//             />
//         </div>
//     )
// }

class Card extends React.Component {
    render() {
        return (
            <div className='card'>
                <Picture picSrc={this.props.picSrc} alt={this.props.desc} />
                <Data
                    title={this.props.title}
                    desc={this.props.desc}
                    link1={this.props.link1}
                    link2={this.props.link2}
                />
            </div>
        )        
    }
}

export default Card;