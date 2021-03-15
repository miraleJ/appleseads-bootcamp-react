import React from 'react'

export default function Ex2_2() {
    const data = ["hello", "world"];
    const number1 = 5;
    const number2 =6;
    const string = "I love React!";

    return (
        <div>
            <h1>{`${data[0]} ${data[1]}`}</h1>
            <h1>{data.join(' ')}</h1>
            <p>{number1 + number2}</p>
            <p>{`The string length is: ${string.length}`}</p>
        </div>
    )
}