import React from 'react'

const Button = ({onClick,text,delta}) => {
    const handleClick = (e) => {
        onClick(e.target.dataset.delta);
    }
    return(
    <button onClick={handleClick} data-delta={delta}>
        {text}
    </button>
    )
}


export default Button