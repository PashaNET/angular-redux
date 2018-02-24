import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
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
    StoreModule.forRoot({'counters': rootReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
