import React from 'react'
import Box3 from './Box3'

// const Box2 = () => {
//     return (
//         <div className='box-2'>
//             <Box3 />
//         </div>
//     )
// }

class Box2 extends React.Component {

    render () {
        return (
            <div className='box-2'>
                <Box3 />
            </div>
        )
    }
}


export default Box2;