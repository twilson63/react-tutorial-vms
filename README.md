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

## Why React is so explicit and verbose

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
json -I -f .data/db.json -e 'this.videos: []'
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

// f6 link dim br2 ph3 pv2 mb2 dib white bg-purple
const styles =
  'f5 backgroundcolor-purple white borderradius-2 paddinghorizontal-small paddingvertical-xsmall bordercolor-purple'

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

# Checkpoint

* [X] Created our first component
* [X] Add Tachyons CSS
* [X] Created a button component
* [X] Consumed a button component
* [X] Imported React Router
* [X] Added a Home Page Component
* [X] Added a Form Page Component
* [X] Created two routes

![img](http://www.fillmurray.com/300/300)

---

# Next

* [ ] More Setup (React Scripts, JSON Server)
* [ ] Create a Form
* [ ] Create a TextField Component
* [ ] Create a Controlled Component
* [ ] Create a TextArea Component
* [ ] Add Redux
* [ ] Add Redux Thunk and Fetch

![img](http://www.fillmurray.com/300/200)

---

# Setup Part 2

```sh
npm i react-scripts foreman json-server -D
mkdir .data
echo '{"videos":[] }' > .data/db.json
touch Procfile
```

## Edit package.json scripts section

```json
"scripts": {
  "start": "nf start",
  "api": "json-server .data/db.json -p 4000",
  "web": "PORT=3000 react-scripts start",
  "build": "react-scripts build",
},
```

## Modify your Procfile

```
web: npm run web
api: npm run api
```

> theres more

---

# Setup 2 (cont)

## replace your index.html

```html
<!doctype html>
<html>
  <head>
      <meta charset="utf-8">
      <title>Training Video Manager</title>
      <link rel="stylesheet" href="https://cdn.rawgit.com/tachyons-css/tachyons-verbose/f5189854/css/tachyons.css" />
  </head>
  <body class="margin-none padding-none">
    <div class="margin-none padding-none" id="root"></div>
  </body>
</html>
```

`npm start`

At this point your app should be running on port 3000 and your api should be running on port 4000

---

> NOTE: address minor clean up

This setup gives us some better error handling
and auto reloading support.

Now we can setup our browser and editor on the same
screen and when changes happen, we see them reflected
in the browser. When an error occurs we see that too.  

## Cool Beans

![img](http://www.fillmurray.com/200/300)

---

# Linking our Add Button to the form.

In our home page, we want to import the `Link` component from `react-router-dom` and wrap our Button
with the Link component.

```
<Link to="/videos/new">
  <Button>Add Video</Button>
</Link>
```

This will tell the app, when the button is clicked to navigate to the /videos/new route

---

## Here is a diff of the Home page component

```js
import React from 'react'
+import Button from '../components/button'
+import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="padding-medium">
-     <h2>Videos</h2>
-     <ul>
-       <li>Video 1</li>
-       <li>Video 2</li>
-     </ul>
+      <Link to="/videos/new">
+        <Button>Add Video</Button>
+      </Link>
+      <h2>Videos</h2>
+      <ul>
+        <li>Video 1</li>
+        <li>Video 2</li>
+      </ul>
    </div>
  )
}

-export default Home
+export default Home
```

> https://github.com/twilson63/react-tutorial-vms/commit/8f61f8a5eaefc87c9c1305e5ed2c84a604b69652#diff-efde4abac1d469216f43ba92d40a18b0

---

## Building a Form

```
import React from 'react'
+import Button from '../components/button'

const Form = () => {
  return (
-    <div>
-      Form
+    <div className="padding-medium">
+      <h2>Video Form</h2>
+      <form>
+        <div className="measure">
+          <label className="f6 fontweight-bold display-block marginbottom-xxsmall">
+            Name
+          </label>
+          <input
+            className="input-reset border bordercolor-black20 padding-xxsmall marginbottom-xxsmall"
+            type="text"
+          />
+          <small className="f6 black60 display-block marginbottom-xxsmall">
+            Enter short description of video
+          </small>
+        </div>
+        <div>
+          <Button>Submit</Button>
+        </div>
+      </form>
    </div>
  )
}
```

---

## Lets create a TextField Component

> src/components/text-field.js

```js
+import React from 'react'
+
+const TextField = props => {
+  return (
+    <div className="measure">
+      <label className="f6 fontweight-bold display-block marginbottom-xxsmall">
+        {props.label}
+      </label>
+      <input
+        className="input-reset display-block width-100p border bordercolor-black20 padding-xxsmall marginbottom-xxsmall"
+        type="text"
+      />
+      <small className="f6 black60 display-block marginbottom-xxsmall">
+        ({props.description})
+      </small>
+    </div>
+  )
+}
+
+export default TextField
View  
```

---

# Add TextField Component to Form

> src/pages/form.js

```js
import React from 'react'
import Button from '../components/button'
+import TextField from '../components/text-field'

const Form = () => {
 return (
   <div className="padding-medium">
     <h2>Video Form</h2>
     <form>
-        <div className="measure">
-          <label className="f6 fontweight-bold display-block marginbottom-xxsmall">
-            Name
-          </label>
-          <input
-            className="input-reset border bordercolor-black20 padding-xxsmall marginbottom-xxsmall"
-            type="text"
-          />
-          <small className="f6 black60 display-block marginbottom-xxsmall">
-            Enter short description of video
-          </small>
-        </div>
+        <TextField label="Name" description="Enter short name of video" />
       <div>
         <Button>Submit</Button>
       </div>
    </form>
  </div>
)
}

export default Form
```

---

# Add more text fields

```js
return (
  <div className="padding-medium">
    <h2>Video Form</h2>
-      <form>
+      <form className="measure">
      <TextField label="Name" description="Enter short name of video" />
+        <TextField label="Description" description="Describe your video" />
+        <TextField
+          label="Categories"
+          description="Enter comma separated list of categories"
+        />
      <div>
        <Button>Submit</Button>
      </div>
```

---

# Create TextArea Component

> src/components/text-area.js

```js
+import React from 'react'
 +
 +const TextField = props => {
 +  return (
 +    <div className="measure">
 +      <label className="f6 fontweight-bold display-block marginbottom-xxsmall">
 +        {props.label}
 +      </label>
 +      <textarea
 +        className="input-reset display-block width-100p border bordercolor-black20 padding-xxsmall marginbottom-xxsmall"
 +        type="text"
 +      />
 +      <small className="f6 black60 display-block marginbottom-xxsmall">
 +        ({props.description})
 +      </small>
 +    </div>
 +  )
 +}
 +
 +export default TextField
```

---

# Add Component to Form.js

```js
import React from 'react'
import Button from '../components/button'
import TextField from '../components/text-field'
+import TextArea from '../components/text-area'

const Form = () => {
  return (
    <div className="padding-medium">
      <h2>Video Form</h2>
      <form className="measure">
        <TextField label="Name" description="Enter short name of video" />
-        <TextField label="Description" description="Describe your video" />
+        <TextArea label="Description" description="Describe your video" />
        <TextField
          label="Categories"
          description="Enter comma separated list of categories"

```

---

# Convert TextField and TextArea into controlled components.

## What is a controlled component

A controlled component is a component that reads its
value from the value property and handles the
onChange event to write the property out to state.

So basically every time the value is changed in state
it is applied to the component and every time the
value is changed in the dom it is applied to state.

> TODO: Create Dogbyte on Controlled Component

---

## Turn TextField into a controlled component

> src/components/text-field.js

```js
<input
   className="input-reset display-block width-100p border bordercolor-black20 padding-xxsmall marginbottom-xxsmall"
   type="text"
+        value={props.value}
+        onChange={e => props.onChange(e.target.value)}
 />
 <small className="f6 black60 display-block marginbottom-xxsmall">
   ({props.description})
```

---

# Setup State Management

> NOTE: Provide Redux Overview

* First we need to install redux
* Create a Redux Store
* Using a Provider Component Attach our Store to the App
* Using the connect function to add our redux state into the form

---

# Installing Redux

```sh
npm install redux react-redux redux-thunk -S
```

![img](http://www.fillmurray.com/400/400)

---

# Creating a Redux Store

> src/store.js

```js
import { createStore } from 'redux'

const rootReducer = function (state, action) {
  return state
}

const store = createStore()

export default store

```

---

# Add Store to App using Provider Component

> src/index.js

```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
+import { Provider } from 'react-redux'
+import store from './store'

const root = document.getElementById('root')
const render = ReactDOM.render

// eslint-disable-next-line fp/no-unused-expression
-render(<App />, root)
+render(<Provider store={store}><App /></Provider>, root)
View  
```

---

## Lets connect our Form component to our Store

> src/pages/form.js

```js
+import { connect } from 'react-redux'

-const Form = () => {
+const Form = props => {
  return (
    <div className="padding-medium">
      <h2>Video Form</h2>
      <form className="measure">
-        <TextField label="Name" description="Enter short name of video" />
+        <TextField
+          label="Name"
+          description="Enter short name of video"
+          value={props.video.name}
+          onChange={name =>
+            props.dispatch({ type: 'SET_VIDEO_NAME', payload: name })}
+        />
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

-export default Form
+const connector = connect(state => state)
+
+export default connector(Form)
```

---

# Configure our reducer

> src/store.js

```js
+import { createStore, combineReducers } from 'redux'
 +import { merge } from 'ramda'
 +
 +const store = createStore(
 +  combineReducers({
 +    video: (state = { name: '' }, action) => {
 +      switch (action.type) {
 +        case 'SET_VIDEO_NAME':
 +          return merge(state, { name: action.payload })
 +        default:
 +          return state
 +      }
 +    }
 +  })
 +)
 +
 +export default store
```

---

# Success!

At this point when we type into our controlled
component it should show in our state.

## Lets look at it using React DevTools

https://github.com/facebook/react-devtools

---

# React Dev Tools

React Dev Tool allow you to inspect your state for
any given component.

[DEMO]

---

# Handle saving the video document

* Submit is clicked
* POST a JSON Document to our api server
* If ok then redirect to home
* Otherwise show error

---

# Adding middleware to redux

> src/store.js

```js
-import { createStore, combineReducers } from 'redux'
+import { createStore, combineReducers, applyMiddleware } from 'redux'
+import thunk from 'redux-thunk'
import { merge } from 'ramda'

const store = createStore(
@@ -11,7 +12,8 @@ const store = createStore(
          return state
      }
    }
-  })
+  }),
+  applyMiddleware(thunk)
)

export default store
```

---

# Use React Router to redirect to Home Page

> src/pages/form.js

ReactRouter adds a couple of props to our component:

* history
* match
* location

We can use the history.push method to redirect to
another location.

```
props.history.push('/')
```

---

# Add isomorphic-fetch

fetch is a way to get and send data to our api server.

```
fetch(url).then(res => ...)
```

---

# Add ActionCreator to

> src/pages/form.js

```js
import TextField from '../components/text-field'
import TextArea from '../components/text-area'
import { connect } from 'react-redux'
+import fetch from 'isomorphic-fetch'

const Form = props => {
  return (
    <div className="padding-medium">
      <h2>Video Form</h2>
-      <form className="measure">
+      <form
+        className="measure"
+        onSubmit={e => {
+          e.preventDefault()
+          props.save(props.video, props.history)
+        }}
+      >
        <TextField
          label="Name"
          description="Enter short name of video"
          value={props.video.name}
-          onChange={name =>
-            props.dispatch({ type: 'SET_VIDEO_NAME', payload: name })}
+          onChange={props.setName}
        />
        <TextArea label="Description" description="Describe your video" />
        <TextField
@@ -29,6 +35,30 @@ const Form = props => {
  )
}

-const connector = connect(state => state)
+const save = video => {
+  return fetch('http://localhost:4000/videos', {
+    method: 'POST',
+    headers: new Headers({
+      'Content-Type': 'application/json'
+    }),
+    body: JSON.stringify(video)
+  }).then(res => res.json())
+}
+
+const connector = connect(state => state, {
+  save: (video, history) => {
+    return dispatch => {
+      dispatch({ type: 'SUBMITTING' })
+      return save(video)
+        .then(res => {
+          history.push('/')
+        })
+        .then(res => ({ type: 'FINISHED' }))
+    }
+  },
+  setName: text => {
+    return { type: 'SET_VIDEO_NAME', payload: text }
+  }
+})

export default connector(Form)
```

---

# Lets list all of our videos on our home page.

* We need to fetch the list from the server
* We need to add the list to our state
* We need to paint the list from our state

---

# get videos

```js
import React from 'react'
import Button from '../components/button'
import { Link } from 'react-router-dom'
+import { connect } from 'react-redux'
+import fetch from 'isomorphic-fetch'
+import { map } from 'ramda'

-const Home = () => {
-  return (
-    <div className="padding-medium">
-      <Link to="/videos/new">
-        <Button>Add Video</Button>
-      </Link>
-      <h2>Videos</h2>
-      <ul>
-        <li>Video 1</li>
-        <li>Video 2</li>
-      </ul>
-    </div>
-  )
+class Home extends React.Component {
+  componentDidMount () {
+    const props = this.props
+    fetch('http://localhost:4000/videos')
+      .then(res => res.json())
+      .then(videos => {
+        props.dispatch({ type: 'SET_VIDEOS', payload: videos })
+      })
+  }
+  render () {
+    const li = function (video) {
+      return <li key={video.id}>{video.name}</li>
+    }
+    const props = this.props
+    return (
+      <div className="padding-medium">
+        <Link to="/videos/new">
+          <Button>Add Video</Button>
+        </Link>
+        <h2>Videos</h2>
+        <ul>
+          {map(li, props.videos)}
+        </ul>
+      </div>
+    )
+  }
}

-export default Home
+const connector = connect(state => state)
+
+export default connector(Home)
```

---

# update store

> src/store.js

```js
const store = createStore(
  combineReducers({
+    videos: (state = [], action) => {
+      switch (action.type) {
+        case 'SET_VIDEOS':
+          return action.payload
+        default:
+          return state
+      }
+    },
    video: (state = { name: '' }, action) => {
      switch (action.type) {
        case 'SET_VIDEO_NAME':
          return merge(state, { name: action.payload })
+
        default:
          return state
      }
```

---

# Exercises

1. Turn Description TextArea into a controlled component
2. Turn Categories into a controlled component from text of comma delimited items to an array of items and store in db.json
3. Create a new model in your db.json api called categories and add new categories to your master list when you add a video document.
4. filter video list by category
5. show count of videos
6. show description of videos in list
7. create a link input for video src for each video

---

### Exercises (cont)

8. create a video search box
9. create a show component
10. create a edit video workflow
11. create a remove video workflow

---

### Exercise 1

1. Turn Description TextArea into a controlled component

In this exercise you want to convert the description field into a controlled component and store the data into the db.json via the api, and have it flow to the store via redux's dispatch function.

> HINT 1 a controlled component must implement the `value and onChange` properties

> HINT 2 Read: https://facebook.github.io/react/docs/forms.html

Validation: When you add new video documents, you should now have a name and description field stored in your db.json

---

### Exercise 2

2. Turn Categories into a controlled component from text of comma delimited items to an array of items and store in db.json

> HINT 1 a controlled component must implement the `value and onChange` properties

> HINT 2 Read: https://facebook.github.io/react/docs/forms.html

Validation: When you add new video documents, you should now have a name, description, category field stored in your db.json, 
the categories node should be an array of strings, eg. ['code', 'game', 'redux']
So you will need to convert 'code, game, redux' to an array, in your ActionCreator, before you store it in the api.

---

### Exercise 3

3. Create a new model in your db.json api called categories and add new categories to your master list when you add a video document.

You can add a new model to your db.json, by editing the file and adding a new node in your root object of the json file.

```
{
  "videos": []
}
```

to

```
{
  "video": [],
  "categories": []
}
```
On componentDidMount you want to use fetch to get the master list of categories, and set them to your redux store.

Then in your handleSubmit get add the categories from your master list and compare to the categories for this document, take a difference between the two and then POST the new ones to your categories endpoint.

---

### Exercise 4

4. filter video list by category

on the list videos component show the list of categories to the left or right of the videos, you should pull the category list from redux and paint them using a map function. Use the button or anchor link to capture an onClick event. Using redux ActionCreators to handleCategoryClick and in that function console log all of the documents that contain a category based on the category clicked.


redux 

