import * as actions from '../actions/blogActions';
// import * as updateBlogAction from '../actions/blogActions';

const initialState = {
    allBloggingEntries: []
};

export const blogReducer = (state=initialState, action) => {
    if (action.type === actions.GET_BLOG_ENTRIES) {
        return Object.assign({}, state, {
        // Object.assign generates
        // a new state object by merging an object
        // representing the new state of the lists
        // to the existing state, and in turn, that resulting 
        // object into an empty object, which ensures
        // that we're not mutating the original state object  
        allBloggingEntries: action.bloggingEntries.bloggingEntry
        });
    }
    return state;
}