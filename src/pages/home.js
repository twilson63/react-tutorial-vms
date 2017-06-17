import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="padding-medium">
      <Link to="/videos/new">
        <Button>Add Video</Button>
      </Link>
      <h2>Videos</h2>
      <ul>
        <li>Video 1</li>
        <li>Video 2</li>
      </ul>
    </div>
  )
}

export default Home
