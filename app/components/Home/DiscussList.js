import React from 'react'
import PropTypes from 'prop-types'
import Discuss from './Discuss'
import AddComment from '../../containers/Home/AddComment'

const DiscussList = ( { comments } ) => (
    <div>
      <ul>
        {comments.map(comment =>
          <Discuss
            key={comment.id}
            {...comment}
          />
        )}
      </ul>
      <AddComment />
     </div>
)

DiscussList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    comment: PropTypes.string
  }).isRequired).isRequired
}

export default DiscussList
