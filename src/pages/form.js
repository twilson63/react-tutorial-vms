import React from 'react'
import Button from '../components/button'

const Form = () => {
  return (
    <div className="padding-medium">
      <h2>Video Form</h2>
      <form>
        <div className="measure">
          <label className="f6 fontweight-bold display-block marginbottom-xxsmall">
            Name
          </label>
          <input
            className="input-reset border bordercolor-black20 padding-xxsmall marginbottom-xxsmall"
            type="text"
          />
          <small className="f6 black60 display-block marginbottom-xxsmall">
            Enter short description of video
          </small>
        </div>
        <div>
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  )
}

export default Form
