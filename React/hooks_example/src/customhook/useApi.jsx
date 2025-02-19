import React, { useEffect, useState } from 'react'

// create logic of api
const useApi = (url) => {
    const [getapi, setGetapi] = useState([])

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setGetapi(data))
    }, [])

    return [getapi]
}

export default useApi
