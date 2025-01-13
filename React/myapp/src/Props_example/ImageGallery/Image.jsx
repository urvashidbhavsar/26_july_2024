import React from 'react'

const Image = ({ image, title }) => {
    return (
        <>
            <div className='card'>
                <img src={image} alt="" style={{ maxWidth: "100%" }} />
                <h2>{title}</h2>
            </div>
        </>
    )
}

export default Image
