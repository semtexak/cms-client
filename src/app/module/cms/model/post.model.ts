import { Category } from './category.model';

export interface Post {
    _id: string;
    title: string;
    perex: string;
    content: string;
    img: string;
    categories: Category[];
    slug: string;
    createdAt: number;
}

export interface PlaceholderPost {
    title: string;
    perex: string;
    categories: any[];
    createdAt: number;
}