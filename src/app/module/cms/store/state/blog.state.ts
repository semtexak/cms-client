import { Post } from '../../model/post.model';
import { Category } from '../../model/category.model';

export interface HomePage {
    isLoading: boolean;
    posts?: Post[];
}

export interface ArchivePage {
    isLoading: boolean;
    posts?: Post[];
}

export interface PostPage {
    isLoading: boolean;
    post: Post;
}

export interface Categories {
    isLoading: boolean;
    categories: Category[];
}

export interface BlogState {
    homePage: HomePage;
    archivePage: ArchivePage;
    postPage: PostPage;
    categories: Categories;
}

const samplePost: Post = {
    _id: 'Sample',
    title: 'Lorem ipsum dolor sit amet.',
    perex: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed vel lectus.',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed vel lectus.',
    img: 'https://picsum.photos/id/240/400/300',
    categories: [
        { name: 'Sample category' },
        { name: 'Sample category' }
    ],
    createdAt: 1585675441323
}

export const initialState: BlogState = {
    homePage: {
        isLoading: false,
        posts: repeat(
            samplePost
            , 12)
    },
    archivePage: {
        isLoading: false,
        posts: repeat(
            samplePost
            , 12)
    },
    postPage: {
        isLoading: false,
        post: samplePost
    },
    categories: {
        isLoading: false,
        categories: null
    }
}

function repeat(item, times): any[] {
    const arr = [];
    for (let i = 0; i < times; i++) {
        arr.push(item);
    }
    return arr;
}