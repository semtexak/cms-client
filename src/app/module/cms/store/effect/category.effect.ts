import { GetCategoriesError } from './../action/blog.action';
import { CategoryService } from './../../service/category.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { BlogActionEnum, GetArchive, GetArchiveSuccess, GetArchiveError, GetCategories, GetCategoriesSuccess } from '../action/blog.action';
import { switchMap, mapTo, catchError, map, delay } from 'rxjs/operators';
import { PostService } from '../../service/post.service';
import { of } from 'rxjs';

@Injectable()
export class CategoryEffect {

    constructor(
        private actions$: Actions,
        private categoryService: CategoryService
    ) {
    }

    @Effect()
    getCategories$ = this.actions$.pipe(
        ofType<GetCategories>(BlogActionEnum.GetCategories),
        switchMap(action => this.categoryService.getCategories().pipe(
            delay(1500),
            map((d: any[]) => new GetCategoriesSuccess(d)),
            catchError(e => of(new GetCategoriesError({message: ''})))
        ))
    );   
}