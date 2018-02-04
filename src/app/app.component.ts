import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';
import { INCREMENT } from './actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  count$: Observable<number>;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  increment() {
    this.ngRedux.dispatch({type: INCREMENT});
  }

  ngOnInit() {
    // this.ngRedux.select(state => console.log(state));
    this.count$ = this.ngRedux.select('count')
  }
}
