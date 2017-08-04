import { connect } from 'react-redux'
import ShowCommentsList from '../../components/Home/ShowCommentsList'

// const getShowCommentsList = ( {comments , isShow} ) => {
//     switch (isShow) {
//         case 'show':
//             return comments
//         case 'hide':
//             return ''
//         default:
//             throw new Error('Unknown isShow: ' + isShow)
//     }
// }

const mapStateToProps = (state) => ({
    comments:state.comments
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(toggleCommentsList())
    }
})

const ShowCommentsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowCommentsList)

export default ShowCommentsListContainer
