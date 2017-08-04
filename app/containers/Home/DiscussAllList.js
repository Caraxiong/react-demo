import { connect } from 'react-redux'
import { addComment } from '../../actions/discussActions'
import DiscussList from '../../components/Home/DiscussList'

const mapStateToProps = (state) => ({
  comments: state.comments
})

const DiscussAllList = connect(
    mapStateToProps
)(DiscussList)

export default DiscussAllList
