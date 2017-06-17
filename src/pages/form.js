import React from 'react'
import Button from '../components/button'
import TextField from '../components/text-field'

const Form = () => {
  return (
    <div className="padding-medium">
      <h2>Video Form</h2>
      <form>
        <TextField label="Name" description="Enter short name of video" />
        <div>
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  )
}

export default Form
