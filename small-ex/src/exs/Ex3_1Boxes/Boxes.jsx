import React from 'react'
import Box1 from './Box1'
import './boxesStyle.css';

// const Boxes = () => {
//     return (
        // <div>
        //     <Box1></Box1>
        // </div>
//     );
// }

class Boxes extends React.Component {

    render () {
        return (
            <div>
                <Box1></Box1>
            </div>
        )
    }
}

export default Boxes;