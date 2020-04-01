import { getAuth } from '../../../../shared/store/select/auth.select';
import { Component, OnInit } from '@angular/core';
import { version } from '../../../../../../package.json';
import { AuthenticationState } from 'src/app/shared/store/state/auth.state';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  version = version;
  auth: AuthenticationState;

  constructor(
    private store: Store<AuthenticationState>
  ) { }

  ngOnInit(): void {
    this.store.pipe(select(getAuth)).subscribe((state: AuthenticationState) => this.auth = state);
  }

}
