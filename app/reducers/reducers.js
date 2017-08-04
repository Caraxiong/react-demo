import { combineReducers } from 'redux'
import comments from './comments'
import toast from './toast'
import modal from './modal'
import commentsListShow from './commentsListShow'

const commentsApp = combineReducers({
  comments,
  commentsListShow,
  toast,
  modal
})

export default commentsApp
