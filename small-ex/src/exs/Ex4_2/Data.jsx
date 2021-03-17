import React from 'react'
import Title from './Title'
import Description from './Description'
import Link from './Link'

const Data = (props) => {
    return (
        <div className='data'>
            <Title title={props.title} />
            <Description desc={props.desc}/>
            <Link urll={props.link1}/>
            <Link urll={props.link2}/>
        </div>
    )
}

export default Data;