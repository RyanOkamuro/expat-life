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