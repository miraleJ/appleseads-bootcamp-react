import React from 'react'

const Link = (props) => {
    return (
        <a className='link' href={`${props.address}`}>Link </a>
    )
}

export default Link;