import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { NgRedux, NgReduxModule } from 'ng2-redux';
import { StoreModule } from '@ngrx/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // NgReduxModule,
    // StoreModule.provideStore({'count': rootReducer})
    StoreModule.forRoot({'root': rootReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(ngRedux: NgRedux<IAppState>) {
  //   ngRedux.configureStore(rootReducer, INITIAL_STATE);
  // }
}
