import {getBlogEntries} from '../actions/blogActions';
import {blogReducer} from './blogReducer';

describe('Get Blog Entries', () => {
    it('Should get all blog entries', () => {
        let state = {
            allBloggingEntries: []
        };
        let bloggingEntries = [{category: 'Travel_Abroad', featured: 'No', title: 'Language Exchange', caption: 'Make the best of your Language Exchange.', blogEntry: 'Language exchange is about..', image: 'https://github.com/RyanOkamuro/expat-life/blob/feature/landing-page/public/assets/Tianjin/Study_Abroad_Tianjin_Signing.JPG?raw=true', createdAt: '2018-10-31T17:42:38.893Z'}]
        state = blogReducer(state, getBlogEntries(bloggingEntries))
        expect(state).toEqual({
            allBloggingEntries: bloggingEntries.bloggingEntries
        })
    })
})