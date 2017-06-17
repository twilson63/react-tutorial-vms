import React from 'react'
import Button from '../components/button'
import TextField from '../components/text-field'
import TextArea from '../components/text-area'
import { connect } from 'react-redux'

const Form = props => {
  return (
    <div className="padding-medium">
      <h2>Video Form</h2>
      <form className="measure">
        <TextField
          label="Name"
          description="Enter short name of video"
          value={props.video.name}
          onChange={name =>
            props.dispatch({ type: 'SET_VIDEO_NAME', payload: name })}
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

const connector = connect(state => state)

export default connector(Form)
