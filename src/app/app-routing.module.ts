import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './shared/component/sign-in/sign-in.component';
import { SignUpComponent } from './shared/component/sign-up/sign-up.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'blog' },
  {
    path: 'blog',
    loadChildren: () => import('./module/cms/cms.module').then(m => m.CmsModule)
  },
  {
    path: 'auth/sign-in',
    component: SignInComponent
  },
  {
    path: 'auth/sign-up',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
