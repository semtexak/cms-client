import { GetPost, GetPostSuccess, GetPostError } from './../action/blog.action';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { BlogActionEnum, GetArchive, GetArchiveSuccess, GetArchiveError } from '../action/blog.action';
import { switchMap, mapTo, catchError, map, delay } from 'rxjs/operators';
import { PostService } from '../../service/post.service';
import { of } from 'rxjs';

@Injectable()
export class PostEffect {

    constructor(
        private actions$: Actions,
        private postService: PostService
    ) {
    }

    @Effect()
    getPost$ = this.actions$.pipe(
        ofType<GetPost>(BlogActionEnum.GetPost),
        switchMap(action => this.postService.getPost(action.slug).pipe(
            delay(5000),
            map((d: any[]) => new GetPostSuccess(d)),
            catchError(e => of(new GetPostError({message: ''})))
        ))
    );
    
}