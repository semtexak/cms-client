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

@NgModule({
  declarations: [SignUpComponent, SignInComponent],
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
    HttpClientModule
  ]
})
export class SharedModule { }
