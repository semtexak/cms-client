import { AppState } from 'src/app/store/state/app.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BlogState } from '../state/blog.state';

const selectBlog = createFeatureSelector<BlogState>('blog');

export const getBlog = createSelector(
    selectBlog,
    (state: BlogState) => state
);
export const getPosts = createSelector(
    selectBlog,
    (state: BlogState) => state.postsPage
);
export const getPost = createSelector(
    selectBlog,
    (state: BlogState) => state.postPage
);
export const getCategories = createSelector(
    selectBlog,
    (state: BlogState) => state.categories
);