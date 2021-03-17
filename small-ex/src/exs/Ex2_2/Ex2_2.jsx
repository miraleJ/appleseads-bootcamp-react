import React from 'react'

// export default function Ex2_2() {
//     const data = ["hello", "world"];
//     const number1 = 5;
//     const number2 =6;
//     const string = "I love React!";

//     return (
//         <div>
//             <h1>{`${data[0]} ${data[1]}`}</h1>
//             <h1>{data.join(' ')}</h1>
//             <p>{number1 + number2}</p>
//             <p>{`The string length is: ${string.length}`}</p>
//         </div>
//     )
// }

class Ex2_2 extends React.Component {
    constructor() {
        super();
        this.data = ["hello", "world"];
        this.number1 = 5;
        this.number2 =6;
        this.string = "I love React!";
    }

    render() {
        return (
            <div>
                <h1>{`${this.data[0]} ${this.data[1]}`}</h1>
                <h1>{this.data.join(' ')}</h1>
                <p>{this.number1 + this.number2}</p>
                <p>{`The string length is: ${this.string.length}`}</p>
            </div>
        )
    }
}

export default Ex2_2;