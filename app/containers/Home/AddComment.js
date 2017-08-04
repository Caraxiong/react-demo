import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../actions/commentActions'

let AddComment = ({ dispatch }) => {
    let textarea

    return (
        <div>
            <form onSubmit = { e => {
                e.preventDefault()
                if(!textarea.value.trim()){
                    return
                }
                dispatch(addComment(textarea.value))
                textarea.value = ''
            }}>
                <textarea ref = {node => {
                    textarea = node
                }}></textarea>
                <button className = "btn">评论</button>
            </form>
        </div>
    )
}

AddComment = connect()(AddComment)

export default AddComment
