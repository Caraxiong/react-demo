import React from 'react'
import PropTypes from 'prop-types'
import Discuss from './Discuss'
import AddComment from '../../containers/Home/AddComment'
import './discuss.scss'

const DiscussList = ( { comments } ) => (
    <div className="discuss-container">
      <div>
        {comments.map(comment =>
          <Discuss
            key={comment.id}
            {...comment}
          />
        )}
      </div>
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
