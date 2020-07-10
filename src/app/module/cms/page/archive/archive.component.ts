import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BlogState } from '../../store/state/blog.state';
import { GetArchive } from '../../store/action/blog.action';
import { getArchive } from '../../store/select/blog.select';

@Component({
  selector: 'app-posts',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  archivePage$ = this.store.pipe(select(getArchive));

  constructor(
    private store: Store<BlogState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetArchive());
  }

}
