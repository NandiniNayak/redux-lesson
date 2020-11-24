import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {divStyles, inputStyles, labelStyles} from '../styles'
// import {useGlobalState} from '../config/store'
import {useSelector, useDispatch} from "react-redux"

const NewBlogPost = ({history}) => {
    // useSelector to retrieve state and useDispatch to dispatch action
    const blogPosts = useSelector(state => state.blogPosts)
    const dispatch = useDispatch()

    const textAreaStyles = {
        height: "200px",
        margin: ".5em",
        width: "70vw"
    }

    // Gets the next available id for a new post 
    function getNextId(){
        const ids = blogPosts.map((post) => post._id)
        return ids.sort()[ids.length-1] + 1
    }
    // Add a post to blogPosts
    function addBlogPost(post) {
        dispatch({
        type: "setBlogPosts",
        data: [...blogPosts, post]
        })
    }

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setFormState({
            ...formState,
            [name]: value
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        const nextId = getNextId()
        const newPost = {
            _id: nextId,
            title: formState.title,
            category: formState.category || "general",
            modified_date: new Date(),
            content: formState.content
        }
        addBlogPost(newPost)
        history.push(`/posts/${nextId}`)
    }
    const initialFormState = {
        title: "",
        category: "",
        content: ""
    } 
    const [formState,setFormState] = useState(initialFormState)
    // basically useContext will let you access the global state and dispatch in all child components
    // const {store, dispatch} = useGlobalState()
    // const {blogPosts} = store

    return (
        <form id="newPostForm" onSubmit={handleSubmit}>
            <div style={divStyles}>
                <label style={labelStyles}>Title</label>
                <input style={inputStyles} required type="text" name="title" placeholder="Enter a title" onChange={handleChange}></input>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Category</label>
                <input style={inputStyles} type="text" name="category" placeholder="Enter a category" onChange={handleChange}></input>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Content</label>
                <textarea form="newPostForm" required style={textAreaStyles} name="content" placeholder="Enter post here" onChange={handleChange}></textarea>
            </div>
            <input type="submit" value="Add post"></input>
        </form>
    ) 
}

export default withRouter(NewBlogPost)