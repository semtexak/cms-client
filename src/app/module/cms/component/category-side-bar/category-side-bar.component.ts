import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BlogState } from '../../store/state/blog.state';
import { GetCategories } from '../../store/action/blog.action';
import { getCategories } from '../../store/select/blog.select';

@Component({
  selector: 'app-category-side-bar',
  templateUrl: './category-side-bar.component.html',
  styleUrls: [
    './../../../../shared/component/side-bar/side-bar.component.scss',
    './category-side-bar.component.scss'
  ]
})
export class CategorySideBarComponent implements OnInit, AfterContentInit {

  categories$;

  constructor(
    private store: Store<BlogState>
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.categories$ = this.store.pipe(select(getCategories));
    this.store.dispatch(new GetCategories());
  }

}
