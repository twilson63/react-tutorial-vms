#### React Tutorial

Building a Video Management App

![murray](http://www.fillmurray.com/600/400)
---

## Requirements

* NodeJS v8.0 or greater (https://nodejs.org)
* Text Editor - (https://atom.io or https://glitch.com)

![img](http://lorempixel.com/600/400/animals)

---

## What will I learn?

This tutorial is for someone just starting with React, so you will learn some basics of React Development.

* render function
* components (What are they?)
* What are props and how to pass them?
* React Stateful Components
* React Router
* Controlled Components
* Data Down, Actions Up
* Code Organization
* Tachyons
* fetch and async
* json-server

---

## Why React is so explicit verbose

To provide a consistent and predictable way to build user interface applications. It is more verbose than other tools, but easier to test
and easier to maintain.

---

## Setup

First we need to setup our project structure:

```sh
mkdir training-videos
cd training-videos
npm init -y
npm install -S express ramda json-server
npm install json -g
json -I -f package.json -e 'this.scripts.start = "node server.js"'
mkdir .data
touch .data/db.json
json -I -f .data/db.json -e 'this = { "videos": [] }'
touch server.js
mkdir public src
touch public/index.html src/index.js
```
---

Create server.js

```js
// create express web app
const app = require('express')()
// get jsonServer module
const jsonServer = require('json-server')

// for all api endpoints use json server
app.use('/api', jsonServer.router('.data/db.json'))

// serve index.html in public folder
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

// serve all javascript files from src folder
app.get('/*.js', (req, res) => {
  res.sendFile(__dirname + '/src' + req.url)
})

// listen for request on port 3000
app.listen(3000)
console.log('Server Listening on port 3000')
```

---

Create index.html

```html
<!doctype html>
<html>
  <head>
    <title>My Tutorial Videos</title>
    <link rel="stylesheet" href="https://cdn.rawgit.com/tachyons-css/tachyons-verbose/f5189854/css/tachyons.css" />
    <script src="https://unpkg.com/getlibs"></script>
  </head>
  <body class="margin-none padding-none">
    <div class="margin-none padding-none" id="root">
    </div>
    <script>
      System.import('/index.js')
    </script>
  </body>
</html>
```

---

Bootstrap React! using src/index.js

```js
// bring in core react lib
import React from 'react'
// bring react dom lib
import ReactDOM from 'react-dom'

// render h1 element on root div
ReactDOM.render(
  <h1>Hello from React</h1>, 
  document.getElementById('root')
)
```

---

> Congrats, you just setup a react app

Run npm start and open a browser on port 3000
of localhost.

```
npm start
```

http://localhost:3000

![img](http://www.fillmurray.com/g/400/300)

---

## First React Component

What is a React Component?

![react](https://facebook.github.io/react/img/logo_og.png)

---

## What is a React Component?

A React component is a JavaScript class that 
contains a render method that returns a component

## A React Stateful Component

```js
import React from 'react'

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>My First Component</h1>
      </div>  
    )
  }
}

export default App
```

---


## What is a React Component?

A React Component is a function that returns 
a component

## A Stateless Component

```js
import React from 'react'

const App = function (props) {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default App
```

---

# Ok, lets create our first component

![img](http://www.fillmurray.com/350/250)

---

# Create src/app.js file

```js
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React App!</h1>
      </div>)
  }
}

export default App
```

---

# Modify src/index.js to import App

```js
// bring in core react lib
import React from 'react'
// bring react dom lib
import ReactDOM from 'react-dom'

+ import App from './app'

// render h1 element on root div
ReactDOM.render(
-  <h1>Hello from React</h1>, 
+  <App />,
  document.getElementById('root')
)
```

> NOTE: when you see a '+' sign that means add that 
line, when you see '-' sign that means delete that 
line. When typing do not include the + or -.

---

# Recap 

Your app.js file should look like this

```js
import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React App!</h1>
      </div>)
  }
}

export default App
```

and index.js file looks like this

```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
```

---

# Check our your browser and it should say!

![img](https://cdn.glitch.com/8a9eea0a-bdd1-4508-9d4b-47144ce3603b%2Freact-screenshot.png?1497649647612)

---

## What about style?

At some point in time we will talk about CSS and
the ecosystem of choices you have, but for now
we are going to use functional css.

via Tachyons

![img](http://cinnafilm.com/wp-content/uploads/press/logo/Tachyon-blacktext-transparentBG.png)

---

We will be using the verbose style:

> if you want to use the macro style - http://tachyons.io/

The verbose version uses a simple formula

classname-value-screensize

- paddingvertical-xxsmall
- paddinghorizontal-medium
- white70
- backgroundcolor-black60

---

## Lets give it a try

```js
import React from 'react'

class App extends React.Component {
  
  render() {
    return (
      <div>
+       <header className="paddingvertical-xxsmall paddinghorizontal-medium backgroundcolor-black60 white70">
-           <h1>React App!</h1>
+           <h1>Training Video Manager</h1>
+        </header>
      </div>
    )
  }
}

export default App
```

> You may notice that we are using the className property instead of the class attribute. React does not support the class attribute because, it will conflict 
with the javascript keyword class.

https://facebook.github.io/react/docs/dom-elements.html#classname

---

## JSX

You may have noticed we are writing a kind of xml or html like syntax. This is 
`jsx` - jsx is another way to invoke a function.

https://facebook.github.io/jsx/

```js
return (
  <div>
    <h1 className="beep">foo</h1>
  </div>
)
```

Gets converted to 

```js
return React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    { className: "beep" },
    "foo"
  )
);
```

---

## Lets add some more JSX in our app.js

```js
import React from 'react'

class App extends React.Component {
  
  render() {
    return (
      <div className="margin-none padding-none">
        <header className="margin-none paddingvertical-xxsmall paddinghorizontal-medium backgroundcolor-black80 white80">
          <h1>Training Video Management</h1>
        </header>
+         <div>
+           <h2>Videos</h2>
+           <ul>
+             <li>Video 1</li>
+             <li>Video 2</li>
+           </ul>
+         </div>
+       </div>
    )
  }
}

export default App
```

---

## You should now see something like this:

![img](https://cdn.glitch.com/8a9eea0a-bdd1-4508-9d4b-47144ce3603b%2FScreen%20Shot%202017-06-16%20at%209.05.15%20PM.png?1497661540802)

---

## Lets create an add button - but lets make it a separate component

> Creating your own components is very easy, and using you components
is even easier.

First lets add the custom button to our app.js

```js
import React from 'react'
+  import Button from './components/button'

class App extends React.Component {
  
  render() {
    return (
      <div className="margin-none padding-none">
        <header className="margin-none paddingvertical-xxsmall paddinghorizontal-medium backgroundcolor-black80 white80">
          <h1>Training Video Management</h1>
        </header>
        <div className="padding-medium">
+          <Button>Add Video</Button>
          <h2>Videos</h2>
          <ul>
            <li>Video 1</li>
            <li>Video 2</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App

```

> This is going to break your app, but you may notice in the console, 
that you have an error.

> Uncaught (in promise) Error: Button is not defined

---

## Add a new file called src/components/button.js

```js
import React from 'react'
import R from 'ramda'
const { compose, join, map, trim, split } = R
const cls = compose(join(' '), map(trim), split('\n'))

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
```

> Using Ramda and backticks, we can make our className decorations more readable.

---

## So now if you look in your browser you should see something like this:

![img](https://cdn.glitch.com/8a9eea0a-bdd1-4508-9d4b-47144ce3603b%2FScreen%20Shot%202017-06-16%20at%209.44.06%20PM.png?1497663871368)

---

## Click Me

Lets add React Router to create some routes
and link the Add Video Button to a page.

First we need to create a new file called

`src/pages/home.js`

```js
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
```

And another file called 

`src/pages/form.js`

```js
import React from 'react'

const Form = () => {
  return (
    <div>
      <h1>Form</h1>
    </div>
  )
}

export default Form
```

---

## Modify app.js

```js
import React from 'react'
+  import ReactRouter from 'react-router-dom'
import Button from './components/button'
+  import Home from './pages/home'
+  import Form from './pages/form'

+  const { BrowserRouter, Route } = ReactRouter

class App extends React.Component {
  
  render() {
    return (
+        <BrowserRouter>
        <div className="margin-none padding-none">
          <header className="margin-none paddingvertical-xxsmall paddinghorizontal-medium backgroundcolor-black80 white80">
            <h1>Training Video Management</h1>
          </header>
+            <Route exact path="/" component={Home} />
+            <Route path="/videos/new" component={Form} />     
-           <div className="padding-medium">
-             <Button>Add Video</Button>
-             <h2>Videos</h2>
-             <ul>
-               <li>Video 1</li>
-               <li>Video 2</li>
-             </ul>
-           </div>
        </div>
+        </BrowserRouter>
    )
  }
}

export default App

```

---

## Modify `src/pages/home.js`

```js

import React from 'react'
import Button from './components/button'


const Home = () => {
  return (
    <div className="padding-medium">
+     <Button>Add Video</Button>
+     <h2>Videos</h2>
+     <ul>
+       <li>Video 1</li>
+      <li>Video 2</li>
+     </ul>
    </div>
  )
}

export default Home

```

---

