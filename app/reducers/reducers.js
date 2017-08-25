import { combineReducers } from 'redux'
import comments from './comments'
import toast from './toast'

const commentsApp = combineReducers({
  comments,
  toast
})

export default commentsApp
