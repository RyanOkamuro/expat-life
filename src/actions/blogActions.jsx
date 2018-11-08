import {API_BASE_URL} from '../config';

export const GET_BLOG_ENTRIES = 'GET_BLOG_ENTRIES';
export const getBlogEntries = bloggingEntries => ({
    type: GET_BLOG_ENTRIES,
    bloggingEntries
});

export const getAllBlogEntries = () => dispatch => {
    return fetch(`${API_BASE_URL}/blogPosts`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    })
    .then(res => {
		if(!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(bloggingEntries => {
		dispatch(getBlogEntries(bloggingEntries));
	});
};

/////////////////////////////////////////////////////////////////

// export const EDIT_BLOG_ENTRIES = 'EDIT_BLOG_ENTRIES';
// export const editBlog = bloggingEntries => ({
//     type: EDIT_BLOG_ENTRIES,
//     bloggingEntries
// })

// export const editedBlogEntry = (bloggingEntry, blogID) => dispatch => {
//     return fetch(`${API_BASE_URL}/blogPosts/${blogID}`, {
//         method: 'PUT',
//         body: JSON.stringify(bloggingEntry),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(res => {
//             if (!res.ok) {
//                 if (
//                     res.headers.has('content-type') &&
//                     res.headers
//                         .get('content-type')
//                         .startsWith('application/json')
//                 ) {
//                     //Detailed JSON error response
//                     return res.json().then(err => Promise.reject(err));
//                 }
//                 // Less informative error returned by express
//                 return Promise.reject({
//                     code: res.status,
//                     message: res.statusText
//                 });
//             }
//             return res.json()
//         })
//         .then(bloggingEntries => {
//             dispatch(getUpdateDeal(bloggingEntries))
//         })
//     }