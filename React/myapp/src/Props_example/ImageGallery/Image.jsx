import React from 'react'

const Image = ({ image, title }) => {
    return (
        <>
            <div className="col-4">
                <div className='card'>
                    <img src={image} alt="" className='img-fluid' />
                    <h2>{title}</h2>
                </div>
            </div>
        </>
    )
}

export default Image
