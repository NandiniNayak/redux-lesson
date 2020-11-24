 // initial state for state reducer
const initialState = {
    blogPosts: [],
    loggedInUser: null
  }

export default function (state = initialState , action) {
    switch(action.type) {
        case "setLoggedInUser": {
            return {
                ...state,
                loggedInUser: action.data
            }
        }
        case "setBlogPosts": {
            return {
                ...state,
                blogPosts: action.data
            }
        }
        default: 
            return state
    }
}