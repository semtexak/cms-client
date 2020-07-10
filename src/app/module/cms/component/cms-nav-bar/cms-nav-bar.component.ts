import { AuthenticationState } from './../../../../shared/store/state/auth.state';
import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getAuth } from 'src/app/shared/store/select/auth.select';
import { Logout } from 'src/app/shared/store/action/auth.action';
import { timer } from 'rxjs';

@Component({
  selector: 'app-cms-nav-bar',
  templateUrl: './cms-nav-bar.component.html',
  styleUrls: [
    './../../../../shared/component/nav-bar/nav-bar.component.scss',
    './cms-nav-bar.component.scss'
  ],
  
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CmsNavBarComponent implements AfterViewInit {
  auth: AuthenticationState;
  timeLeft: number = 0;

  constructor(
    private store: Store<AuthenticationState>
  ) { }

  ngAfterViewInit(): void {
    this.store.pipe(select(getAuth)).subscribe((state: AuthenticationState) => {
      this.auth = state;
      if (this.auth.user) {
        const now = new Date();
        const iat =  new Date(state.user.iat * 1000);
        timer(1000).subscribe(_ => this.timeLeft = (iat.getTime() - now.getTime()) / 1000)
      }
    });
  }

  logout(): void {
    this.store.dispatch(new Logout());
  }

}
