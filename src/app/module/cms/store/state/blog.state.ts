export interface PostsPage {
    isLoading: boolean;
    posts?: any[];
}

export interface PostPage {
    isLoading: boolean;
    post: any;
}

export interface Categories {
    isLoading: boolean;
    categories: any[];
}

export interface BlogState {
    postsPage: PostsPage;
    postPage: PostPage;
    categories: Categories;
}

export const initialState: BlogState = {
    postsPage: {
        isLoading: false,
        posts: repeat(
            {
                title: 'Lorem ipsum dolor sit amet.',
                perex: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed vel lectus.',
                img: 'https://picsum.photos/id/240/400/300'
            }
            , 12)
    },
    postPage: {
        isLoading: false,
        post: null
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