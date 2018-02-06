import { Component } from '@angular/core';
import { IAppState } from './store';
import { INCREMENT, ADD_COUNTER } from './actions';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  counters: Observable<IAppState>;

  constructor(private store: Store<any>) {
    store.select('counters').subscribe((state) => {this.counters = state;});
  }

  onAddNewCounter(data) {
    this.store.dispatch({type: ADD_COUNTER, payload: data});
  }

  increment() {
    this.store.dispatch({type: INCREMENT});
  }

  decrement() {

  }

  removeCounter() {

  }
  

  ngOnInit() {}
}
