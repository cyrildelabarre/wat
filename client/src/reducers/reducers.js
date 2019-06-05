import { combineReducers } from 'redux'
import { authReducer } from './AuthReducer'
import { errorReducer } from './ErrorReducer'
import { articleReducer } from './ArticlesReducer'

export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  article: articleReducer
})
