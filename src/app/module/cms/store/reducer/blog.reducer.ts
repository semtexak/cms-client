import { BlogActions, BlogActionEnum } from '../action/blog.action';
import { initialState, BlogState } from '../state/blog.state';

export const blogReducer = (state: BlogState = initialState, action: BlogActions): BlogState => {
    switch (action.type) {
        case BlogActionEnum.GetArchive:
            const postsPage = {...state.postsPage};
            postsPage.isLoading = true;
            return {
                ...state,
                postsPage
            };
        case BlogActionEnum.GetArchiveSuccess:
            return {
                ...state,
                postsPage: {
                    isLoading: false,
                    posts: action.payload
                }
            };
        case BlogActionEnum.GetArchiveError:
            return {
                ...state,
                postsPage: {
                    isLoading: false,
                    posts: null
                }
            };
        default:
            return state;
    }
}