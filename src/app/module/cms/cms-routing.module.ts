import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchiveComponent } from './page/archive/archive.component';
import { PostComponent } from './page/post/post.component';
import { MainComponent } from './page/main/main.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: MainComponent, data: {test: 'test'} },
      { path: 'archive', component: ArchiveComponent, data: {test: 'test'} },
      { path: ':slug', component: PostComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
