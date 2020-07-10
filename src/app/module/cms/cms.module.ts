import { CategoryEffect } from './store/effect/category.effect';
import { PostEffect } from './store/effect/post.effect';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { ArchiveComponent } from './page/archive/archive.component';
import { PostComponent } from './page/post/post.component';
import { LayoutComponent } from '../../layout/layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './service/post.service';
import { CategoryService } from './service/category.service';
import { StoreModule } from '@ngrx/store';
import { blogReducer } from './store/reducer/blog.reducer';
import { EffectsModule} from '@ngrx/effects';
import { PostsEffect } from './store/effect/posts.effect';
import { CategorySideBarComponent } from './component/category-side-bar/category-side-bar.component';
import { CmsNavBarComponent } from './component/cms-nav-bar/cms-nav-bar.component';
import { MainComponent } from './page/main/main.component';

@NgModule({
  declarations: [ArchiveComponent, PostComponent, LayoutComponent, CategorySideBarComponent, CmsNavBarComponent, MainComponent],
  imports: [
    CommonModule,
    CmsRoutingModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forFeature('blog', blogReducer),
    EffectsModule.forFeature([PostsEffect, PostEffect, CategoryEffect])
  ],
  providers: [
    CategoryService,
    PostService
  ]
})
export class CmsModule { }
