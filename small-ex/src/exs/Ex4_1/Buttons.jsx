import React from 'react'
import Button from './Button'


// const Buttons = () => {
//     return (
//         <div>
//             <Button text='Important'></Button>
//             <Button text='Not Important'></Button>
//         </div>
//     )
// }

class Buttons extends React.Component {
    render() {
        return (
            <div>
                <Button text='Important'></Button>
                <Button text='Not Important'></Button>
            </div>
        )
    }
}

export default Buttons;