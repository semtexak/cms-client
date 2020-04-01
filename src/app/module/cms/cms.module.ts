import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { PostsComponent } from './page/posts/posts.component';
import { PostComponent } from './page/post/post.component';
import { LayoutComponent } from './component/layout/layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './service/post.service';
import { CategoryService } from './service/category.service';
import { StoreModule } from '@ngrx/store';
import { blogReducer } from './store/reducer/blog.reducer';
import { EffectsModule} from '@ngrx/effects';
import { PostsEffect } from './store/effect/posts.effect';

@NgModule({
  declarations: [PostsComponent, PostComponent, LayoutComponent],
  imports: [
    CommonModule,
    CmsRoutingModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature('blog', blogReducer),
    EffectsModule.forFeature([PostsEffect])
  ],
  providers: [
    PostService,
    CategoryService
  ]
})
export class CmsModule { }
