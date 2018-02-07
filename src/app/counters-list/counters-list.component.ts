import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Counter } from '../counter.model';
import { State } from '@ngrx/store/src/state';

@Component({
  selector: 'app-counters-list',
  templateUrl: './counters-list.component.html',
  styleUrls: ['./counters-list.component.styl']
})
export class CountersListComponent implements OnInit {
  counters: Array<Counter>;
  
  constructor(private _store: Store<any>) {
    this._store.select('counters').subscribe(state => this.counters = state);
   }

  ngOnInit() {
  }

}
