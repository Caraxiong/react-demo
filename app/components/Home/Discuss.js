import React from 'react'
import PropTypes from 'prop-types'

const Discuss = ( { comment } ) => (
  <div className="discuss-item">
    {comment}
  </div>
)

Discuss.propTypes = {
  comment: PropTypes.string.isRequired
}

export default Discuss
