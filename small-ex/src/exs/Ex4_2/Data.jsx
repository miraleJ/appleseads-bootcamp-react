import React from 'react'
import Title from './Title'
import Description from './Description'
import Link from './Link'

// const Data = (props) => {
//     return (
//         <div className='data'>
//             <Title title={props.title} />
//             <Description desc={props.desc}/>
//             <Link urll={props.link1}/>
//             <Link urll={props.link2}/>
//         </div>
//     )
// }

class Data extends React.Component {
    render() {
        return (
            <div className='data'>
                <Title title={this.props.title} />
                <Description desc={this.props.desc}/>
                <Link urll={this.props.link1}/>
                <Link urll={this.props.link2}/>
            </div>
        )
    }
}

export default Data;