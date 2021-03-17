import React from 'react'
import Card from './Card'
import './cardsStyle.css'

const Cards = () => {
    return (
        <div>
            <Card
                picSrc="https://source.unsplash.com/random" 
                title="C1" 
                desc="First random pic - great!" 
                link1="#" 
                link2="#"
            />
            <Card
                picSrc="https://source.unsplash.com/random" 
                title="C2" 
                desc="Second random pic - awsom!" 
                link1="#" 
                link2="#"
            />
            <Card
                picSrc="https://source.unsplash.com/random" 
                title="C3" 
                desc="Third time I screem!" 
                link1="#" 
                link2="#"
            />

        </div>
    )
}

export default Cards;