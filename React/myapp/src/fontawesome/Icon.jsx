import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { faMoon } from "@fortawesome/free-regular-svg-icons";

const Icon = () => {
    return (
        <>
            <FontAwesomeIcon icon={faHome} />
            <FontAwesomeIcon icon={faWhatsapp} />
            {/* <i className="fa-solid fa-home"></i> */}
        </>
    )
}
export default Icon;