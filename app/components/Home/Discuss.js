import React from 'react'
import PropTypes from 'prop-types'

const Discuss = ( { comment } ) => (
  <li>
    {comment}
  </li>
)

Discuss.propTypes = {
  comment: PropTypes.string.isRequired
}

export default Discuss
