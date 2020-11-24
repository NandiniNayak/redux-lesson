import React, {useReducer, useEffect} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import blogData from './data/post_data'
import Nav from './components/Nav'
import BlogPosts from './components/BlogPosts'
import BlogPost from './components/BlogPost'
import NewBlogPost from './components/NewBlogPost'
import EditBlogPost from './components/EditBlogPost'
import SignIn from './components/SignIn'
import Register from './components/Register'
// import stateReducer from './config/stateReducer'
// import {StateContext} from './config/store'
import {useDispatch} from "react-redux"

const App = () => {
  const dispatch  = useDispatch()
  useEffect(() => {
    dispatch({
      type: "setBlogPosts",
      data: blogData
    })
  },[])

  // // Returns a single post based on the id provided
  // function getPostFromId(id) {
  //   const post =  blogPosts.find((post) =>  post._id === parseInt(id))
  //   return post
  // }

  // // Update a post to blogPosts
  // function updateBlogPost(updatedPost) {
  //   const otherPosts = blogPosts.filter((post) => post._id !== updatedPost._id)
  //   dispatch({
  //     type: "setBlogPosts",
  //     data: [...otherPosts, updatedPost]
  //   })
  // }

  // // Delete a blog post that matches id
  // function deleteBlogPost(id) {
  //   const updatedPosts = blogPosts.filter((post) => post._id !== parseInt(id))
  //   dispatch({
  //     type: "setBlogPosts",
  //     data: updatedPosts
  //   })
  // }

  // // Register user
  // function registerUser(user) {
  //   dispatch({
  //     type: "setLoggedInUser",
  //     data: user.username
  //   })
  // }

  // // Login user
  // function loginUser(user) {
  //   dispatch({
  //     type: "setLoggedInUser",
  //     data: user.username
  //   })
  // }

  return (
    <div >
        <BrowserRouter>
          <Nav />
          <h1>Many Mumbling Mice</h1>
          <Route exact path="/" component={BlogPosts} />
          {/* <Route exact path="/posts/:id" render={(props) => <BlogPost {...props} post={getPostFromId(props.match.params.id)} showControls deleteBlogPost={deleteBlogPost}/> } /> */}
          {/* <Route exact path="/posts/new" component={NewBlogPost} /> */}
          {/* <Route exact path="/posts/edit/:id" render={(props) => <EditBlogPost {...props} updateBlogPost={updateBlogPost} post={getPostFromId(props.match.params.id)}/> }/> */}
          <Route exact path="/auth/login" component= {SignIn} />
          <Route exact path="/auth/register" component={Register} />
        </BrowserRouter>
    </div>
  )
}

export default App
