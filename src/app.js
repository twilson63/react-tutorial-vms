import React from 'react'
import ReactRouter from 'react-router-dom'
import Home from './pages/home'
import Form from './pages/form'

const { BrowserRouter, Route } = ReactRouter

class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="margin-none padding-none">
          <header className="margin-none paddingvertical-xxsmall paddinghorizontal-medium backgroundcolor-black80 white80">
            <h1>Training Video Management</h1>
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/videos/new" component={Form} />     
        </div>
      </BrowserRouter>
    )
  }
}

export default App
