import { getPost } from './../../store/select/blog.select';
import { BlogState } from './../../store/state/blog.state';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPost } from '../../store/action/blog.action';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post$ = this.store.pipe(select(getPost));

  constructor(
    private route: ActivatedRoute,
    private store: Store<BlogState>
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.store.dispatch(new GetPost(params.slug));
    });
  }

}
