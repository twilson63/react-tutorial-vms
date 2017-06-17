import { createStore, combineReducers } from 'redux'
import { merge } from 'ramda'

const store = createStore(
  combineReducers({
    video: (state = { name: '' }, action) => {
      switch (action.type) {
        case 'SET_VIDEO_NAME':
          return merge(state, { name: action.payload })
        default:
          return state
      }
    }
  })
)

export default store
