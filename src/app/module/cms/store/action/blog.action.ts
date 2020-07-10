import { Action } from '@ngrx/store';

export enum BlogActionEnum {
    GetArchive = '[Posts] Archive',
    GetArchiveError = '[Posts] Archive error',
    GetArchiveSuccess = '[Posts] Archive success',
    GetPost = '[Post] Get Post by slug',
    GetPostError = '[Post] Get Post error',
    GetPostSuccess = '[Post] Get Post success',
    GetCategories = '[Category] Get Categories',
    GetCategoriesSuccess = '[Category] Get Categories Success',
    GetCategoriesError = '[Category] Get Categories Error'
}

export class GetArchive implements Action {
    public readonly type = BlogActionEnum.GetArchive;
}
export class GetArchiveSuccess implements Action {
    public readonly type = BlogActionEnum.GetArchiveSuccess;
    constructor(public payload: any[]) {}
}
export class GetArchiveError implements Action {
    public readonly type = BlogActionEnum.GetArchiveError;
    constructor(public payload: {message: string}) {}
}
export class GetPost implements Action {
    public readonly type = BlogActionEnum.GetPost;
    constructor(public slug: string) {}
}
export class GetPostSuccess implements Action {
    public readonly type = BlogActionEnum.GetPostSuccess;
    constructor(public payload: any) {}
}
export class GetPostError implements Action {
    public readonly type = BlogActionEnum.GetPostError;
    constructor(public payload: {message: string}) {}
}
export class GetCategories implements Action {
    public readonly type = BlogActionEnum.GetCategories;
    constructor() {}
}
export class GetCategoriesSuccess implements Action {
    public readonly type = BlogActionEnum.GetCategoriesSuccess;
    constructor(public payload: any) {}
}
export class GetCategoriesError implements Action {
    public readonly type = BlogActionEnum.GetCategoriesError;
    constructor(public payload: {message: string}) {}
}

export type BlogActions = GetArchive | GetArchiveSuccess | GetArchiveError | GetPost | GetPostSuccess | GetPostError | GetCategories | GetCategoriesSuccess | GetCategoriesError;
