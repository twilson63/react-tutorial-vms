import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { merge } from 'ramda'

const store = createStore(
  combineReducers({
    videos: (state = [], action) => {
      switch (action.type) {
        case 'SET_VIDEOS':
          return action.payload
        default:
          return state
      }
    },
    video: (state = { name: '' }, action) => {
      switch (action.type) {
        case 'SET_VIDEO_NAME':
          return merge(state, { name: action.payload })

        default:
          return state
      }
    }
  }),
  applyMiddleware(thunk)
)

export default store
