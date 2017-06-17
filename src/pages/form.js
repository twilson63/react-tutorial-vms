import React from 'react'
import Button from '../components/button'
import TextField from '../components/text-field'
import TextArea from '../components/text-area'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'

const Form = props => {
  return (
    <div className="padding-medium">
      <h2>Video Form</h2>
      <form
        className="measure"
        onSubmit={e => {
          e.preventDefault()
          props.save(props.video, props.history)
        }}
      >
        <TextField
          label="Name"
          description="Enter short name of video"
          value={props.video.name}
          onChange={props.setName}
        />
        <TextArea label="Description" description="Describe your video" />
        <TextField
          label="Categories"
          description="Enter comma separated list of categories"
        />
        <div>
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  )
}

const save = video => {
  return fetch('http://localhost:4000/videos', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(video)
  }).then(res => res.json())
}

const connector = connect(state => state, {
  save: (video, history) => {
    return dispatch => {
      dispatch({ type: 'SUBMITTING' })
      return save(video)
        .then(res => {
          history.push('/')
        })
        .then(res => ({ type: 'FINISHED' }))
    }
  },
  setName: text => {
    return { type: 'SET_VIDEO_NAME', payload: text }
  }
})

export default connector(Form)
