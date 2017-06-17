import React from 'react'
import R from 'ramda'
const { compose, join, map, trim, split } = R
const cls = compose(join(' '), map(trim), split('\n'))

// f6 link dim br2 ph3 pv2 mb2 dib white bg-purple
const styles = cls(`
  f5 
  backgroundcolor-purple 
  white 
  borderradius-2 
  paddinghorizontal-small
  paddingvertical-xsmall
  bordercolor-purple
`)

const Button = props => {
  return (
    <div className="float-right">
    <button className={styles}>{props.children}</button>
    </div>
  )
}

export default Button