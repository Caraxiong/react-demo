import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../actions/commentActions'

let AddComment = ({ dispatch }) => {
    let textarea

    return (
        <div className="comment-textarea">
            <form onSubmit = { e => {
                e.preventDefault()
                if(!textarea.value.trim()){
                    return
                }
                dispatch(addComment(textarea.value))
                textarea.value = ''
            }}>
                <textarea className = "fl" ref = {node => {
                    textarea = node
                }}></textarea>
                <button className = "btn fl ml20">评论</button>
            </form>
        </div>
    )
}

AddComment = connect()(AddComment)

export default AddComment
