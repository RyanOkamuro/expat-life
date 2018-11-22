import {GET_BLOG_ENTRIES, getBlogEntries, getAllBlogEntries} from './blogActions';
import {API_BASE_URL} from '../config';

describe('getBlogEntries', () => {
    it('Should return the action', () => {
        const bloggingEntries = 'This is blog entry 1';
        const action = getBlogEntries(bloggingEntries);
        expect(action.type).toEqual(GET_BLOG_ENTRIES);
        expect(action.bloggingEntries).toEqual(bloggingEntries);
    });
});

describe('getAllBlogEntries', () => {
    it('Should dispatch getBlogEntries', () => {
        const bloggingEntries = ['This is blog entry 1', 'This is blog entry 2'];
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({ok: true, json(){
                return bloggingEntries;
            }})
        })
        const dispatch = jest.fn();
        return getAllBlogEntries()(dispatch)
        .then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/blogPosts`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                },
            }) 
            expect(dispatch).toHaveBeenCalledWith(getBlogEntries(bloggingEntries))
        })
    })
})