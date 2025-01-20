import React from 'react'
import Image from './Image'

const Gallery = () => {
    return (
        <>
            <div className="row">
                <Image image="https://t3.ftcdn.net/jpg/06/15/49/68/360_F_615496890_W34yB8VDE6n5pehb5QCt1ek5oEvRo9qA.jpg" title="Image 1" />

                <Image image="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg" title="Image 2" />

                <Image image="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg" title="Image 3" />

            </div>
        </>
    )
}

export default Gallery
