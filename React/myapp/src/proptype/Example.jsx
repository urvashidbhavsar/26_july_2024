import React from 'react'
import PropTypes from 'prop-types'

const Example = props => {
    return (
        <>
            <h1>{props.name}</h1>
        </>
    )
}
Example.propTypes = {
    name: PropTypes.string,

}
export default Example;
