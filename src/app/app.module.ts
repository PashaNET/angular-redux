import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { NgRedux, NgReduxModule } from 'ng2-redux';
import { StoreModule } from '@ngrx/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { NewCounterComponent } from './new-counter/new-counter.component';
import { CountersListComponent } from './counters-list/counters-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCounterComponent,
    CountersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // NgReduxModule,
    // StoreModule.provideStore({'count': rootReducer})
    StoreModule.forRoot({'counters': rootReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(ngRedux: NgRedux<IAppState>) {
  //   ngRedux.configureStore(rootReducer, INITIAL_STATE);
  // }
}
