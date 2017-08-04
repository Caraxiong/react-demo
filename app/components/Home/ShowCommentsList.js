import React from 'react'
import PropTypes from 'prop-types'

const ShowCommentsList = ({ onClick }) => (
    <a href="javascript:void(0)" className = "btn btn-plain ml20" onClick={() => onClick()}>5条评论</a>
)

ShowCommentsList.propTypes = {
//     onclick:PropTypes.func.isRequired,
//     number:PropTypes.number.isRequired
}
export default ShowCommentsList
