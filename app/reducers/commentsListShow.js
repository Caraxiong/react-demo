import commentsData from '../../data/comments.json'

let initState = {
    comments:[]
}
commentsData.data.map(comment =>
    initState.comments.push({
        id:comment.id,
        content: comment.content,
        vote_count: comment.vote_count
    })
)

const commentsListShow = ( state = initState , action ) => {
    switch (action.type) {
        case 'TOGGLE_COMMENTS_LIST':
            return [
                ...state
            ]
        default:
            return state
    }
}
export default commentsListShow
