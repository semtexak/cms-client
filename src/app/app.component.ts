import { CmsNavBarComponent } from './module/cms/component/cms-nav-bar/cms-nav-bar.component';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { AuthenticationState } from './shared/store/state/auth.state';
import { Store, select } from '@ngrx/store';
import { getAuth } from './shared/store/select/auth.select';
import { Logout } from './shared/store/action/auth.action';
import { version } from '../../package.json';
import { ActivatedRoute } from '@angular/router';
import { CategorySideBarComponent } from './module/cms/component/category-side-bar/category-side-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('navbar', { read: ViewContainerRef }) navbar: ViewContainerRef;
  @ViewChild('sidebar', { read: ViewContainerRef }) sidebar: ViewContainerRef;

  version = version;
  auth: AuthenticationState;

  constructor(
    private store: Store<AuthenticationState>,
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.route.data.subscribe(data => {
      console.log('Data', data);
      let resolverNavbar = this.componentFactoryResolver.resolveComponentFactory(CmsNavBarComponent);
      let navBarComponent = this.sidebar.createComponent(resolverNavbar);
      let resolverSidebar = this.componentFactoryResolver.resolveComponentFactory(CategorySideBarComponent);
      let sideBarComponent = this.sidebar.createComponent(resolverSidebar);
    });
  }
}
