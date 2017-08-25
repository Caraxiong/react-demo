export const ADD_COMMENT = 'ADD_COMMENT'
let nextCommentId = 0
export const addComment = (comment) => ({
    type: ADD_COMMENT,
    id: nextCommentId++,
    comment
})
