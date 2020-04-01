import { Action } from '@ngrx/store';

export enum BlogActionEnum {
    GetArchive = '[Posts] Archive',
    GetArchiveError = '[Posts] Archive error',
    GetArchiveSuccess = '[Posts] Archive success'
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

export type BlogActions = GetArchive | GetArchiveSuccess | GetArchiveError;
