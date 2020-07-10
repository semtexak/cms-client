import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgLazyModule, ImgLazyDirective } from 'rc';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffect } from './store/effect/auth.effect';
import { authenticationReducer } from './store/reducer/auth.reducer';
import { CookieService } from 'ngx-cookie-service';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';

@NgModule({
  declarations: [SignUpComponent, SignInComponent, SideBarComponent, NavBarComponent],
  imports: [
    CommonModule,
    ImgLazyModule,
    ReactiveFormsModule,
    StoreModule.forFeature('authentication', authenticationReducer),
    EffectsModule.forFeature([AuthEffect]),
    HttpClientModule
  ],
  exports: [
    SignInComponent,
    SignUpComponent,
    ImgLazyModule,
    ImgLazyDirective,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CookieService]
})
export class SharedModule { }
