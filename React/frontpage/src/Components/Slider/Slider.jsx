import React from 'react'
import Imgsetup from '../Imgsetup'

const Slider = () => {
    let imgcollection = [
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30003._CB542120021_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/GW/P42/Boult_3000x1200-PC._CB543542644_.jpg"
    ]

    return (
        <>
            <div class="bxslider">
                {
                    imgcollection.map(items =>
                        <Imgsetup imgsource={items} width="100%" />
                    )
                }
            </div>
        </>
    )
}

export default Slider
