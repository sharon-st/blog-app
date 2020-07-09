import React from 'react';
import ViewPosts from "./ViewPosts"
import Nav from "./Nav"
import Post from "./Post"
import CreatePost from "./CreatePost"
import EditPost from "./EditPost"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/viewposts/:id/editpost" exact component={EditPost} />
            <Route path="/createpost" exact component={CreatePost} />
            <Route path="/viewposts" exact component={ViewPosts} />
            <Route path="/viewposts/:id" component={Post} />
          </Switch>
        </div>
  
    </Router>

  )
}
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)


export default App;
