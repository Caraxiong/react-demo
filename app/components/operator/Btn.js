import React from 'react'
import PropTypes from 'prop-types'

const Btn = ({ onClick }) => (
    <a href="javascript:void(0)" className="btn btn-blue" onClick = { onClick }><i></i>写回答</a>
)

Btn .propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Btn
