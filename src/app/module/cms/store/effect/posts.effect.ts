import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { BlogActionEnum, GetArchive, GetArchiveSuccess, GetArchiveError } from '../action/blog.action';
import { switchMap, mapTo, catchError, map, delay } from 'rxjs/operators';
import { PostService } from '../../service/post.service';
import { of } from 'rxjs';

@Injectable()
export class PostsEffect {

    constructor(
        private actions$: Actions,
        private postService: PostService
    ) {
    }

    @Effect()
    getArchive$ = this.actions$.pipe(
        ofType<GetArchive>(BlogActionEnum.GetArchive),
        switchMap(action => this.postService.getArchive().pipe(
            delay(5000),
            map((d: any[]) => new GetArchiveSuccess(d)),
            catchError(e => of(new GetArchiveError({message: ''})))
        ))
    );

    
}