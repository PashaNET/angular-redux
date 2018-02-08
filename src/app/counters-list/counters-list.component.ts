import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Counter } from '../counter.model';
import { State } from '@ngrx/store/src/state';

@Component({
  selector: 'app-counters-list',
  templateUrl: './counters-list.component.html',
  styleUrls: ['./counters-list.component.styl']
})
export class CountersListComponent implements OnInit {
  // counters: Array<Counter>;
  
  @Output() increment: EventEmitter<any> = new EventEmitter();
  @Output() decrement: EventEmitter<any> = new EventEmitter();
  @Output() removeCounter: EventEmitter<any> = new EventEmitter();
  @Input() counters: Array<Counter>;

  constructor(private _store: Store<any>) {
    // this._store.select('counters').subscribe(state => this.counters = state);
   }

  ngOnInit() {
  }

}
