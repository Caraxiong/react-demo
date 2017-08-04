import commentsData from '../../data/comments.json'

let initState = []
commentsData.data.map(comment =>
    initState.push({
        id:comment.id,
        comment: comment.content,
        vote_count: comment.vote_count
    })
)

const comments = ( state = initState , action ) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {
                    id: action.id,
                    comment: action.comment,
                    vote_count: 0
                }
            ]
        default:
            return state
    }
}
export default comments
