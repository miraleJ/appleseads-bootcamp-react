import React from 'react'

const Link = (props) => {
    return (
        <div>
            <a className='link' href={`${props.address}`}>Link </a>
            <br/>
        </div>
    )
}

export default Link;