let nextCommentId = 0
export const addComment = (content) => ({
    type: 'ADD_COMMENT',
    id: nextCommentId++,
    content
})
