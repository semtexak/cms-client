import { getBlog } from './../../store/select/blog.select';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { Store, select } from '@ngrx/store';
import { BlogState } from '../../store/state/blog.state';
import { GetArchive } from '../../store/action/blog.action';
import { getPosts } from '../../store/select/blog.select';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts = [];
  postsPage$ = this.store.pipe(select(getPosts));

  constructor(
    private store: Store<BlogState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetArchive());
  }

}
