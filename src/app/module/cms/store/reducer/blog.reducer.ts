import { BlogActions, BlogActionEnum } from '../action/blog.action';
import { initialState, BlogState } from '../state/blog.state';

export const blogReducer = (state: BlogState = initialState, action: BlogActions): BlogState => {
    switch (action.type) {
        case BlogActionEnum.GetArchive:
            const postsPage = { ...state.archivePage };
            postsPage.isLoading = true;
            return {
                ...state,
                archivePage: postsPage
            };
        case BlogActionEnum.GetArchiveSuccess:
            return {
                ...state,
                archivePage: {
                    isLoading: false,
                    posts: action.payload
                }
            };
        case BlogActionEnum.GetArchiveError:
            return {
                ...state,
                archivePage: {
                    isLoading: false,
                    posts: null
                }
            };
        case BlogActionEnum.GetPost:
            const postPage = { ...state.postPage };
            postPage.isLoading = true;
            return {
                ...state,
                postPage
            };
        case BlogActionEnum.GetPostSuccess:
            return {
                ...state,
                postPage: {
                    isLoading: false,
                    post: action.payload
                }
            };
        case BlogActionEnum.GetPostError:
            return {
                ...state,
                postPage: {
                    isLoading: false,
                    post: null
                }
            };
        case BlogActionEnum.GetCategories:
            const categories = { ...state.categories };
            categories.isLoading = true;
            return {
                ...state,
                categories
            };
        case BlogActionEnum.GetCategoriesSuccess:
            return {
                ...state,
                categories: {
                    isLoading: false,
                    categories: action.payload
                }
            };
        case BlogActionEnum.GetCategoriesError:
            return {
                ...state,
                categories: {
                    isLoading: false,
                    categories: []
                }
            };
        default:
            return state;
    }
}