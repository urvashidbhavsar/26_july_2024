import React from 'react'

const Imgsetup = ({ imgsource, width }) => {
    return (
        <>
            <div>
                <img src={imgsource} alt="" width={width} />
            </div>
        </>
    )
}

export default Imgsetup
