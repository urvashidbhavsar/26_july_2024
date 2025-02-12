import React, { useRef } from 'react'
import Myvideo from '../video/Aboutapi.mp4'

const Videoplay = () => {
    const videoref = useRef(null)

    const playvideo = () => {
        videoref.current.play()
    }
    const pausevideo = () => {
        videoref.current.pause()
    }
    return (
        <>
            <button onClick={playvideo}>Play</button>
            <button onClick={pausevideo}>Pause</button>
            <hr />
            <video width={300} ref={videoref}>
                <source src={Myvideo} />
            </video>
        </>
    )
}

export default Videoplay
