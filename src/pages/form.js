import React from 'react'
import Button from '../components/button'
import TextField from '../components/text-field'

const Form = () => {
  return (
    <div className="padding-medium">
      <h2>Video Form</h2>
      <form className="measure">
        <TextField label="Name" description="Enter short name of video" />
        <TextField label="Description" description="Describe your video" />
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

export default Form
