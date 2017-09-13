import { combineReducers } from 'redux'
import comments from './comments'
import toast from './toast'
import dialog from './dialog'

const commentsApp = combineReducers({
  comments,
  toast,
  dialog
})

export default commentsApp
