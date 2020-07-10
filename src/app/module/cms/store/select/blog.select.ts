import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BlogState } from '../state/blog.state';

const selectBlog = createFeatureSelector<BlogState>('blog');

export const getBlog = createSelector(
    selectBlog,
    (state: BlogState) => state
);
export const getHomePosts = createSelector(
    selectBlog,
    (state: BlogState) => state.homePage
);
export const getArchive = createSelector(
    selectBlog,
    (state: BlogState) => state.archivePage
);
export const getPost = createSelector(
    selectBlog,
    (state: BlogState) => state.postPage
);
export const getCategories = createSelector(
    selectBlog,
    (state: BlogState) => state.categories
);