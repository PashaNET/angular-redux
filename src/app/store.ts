import { INCREMENT } from './actions';
import { Action } from '@ngrx/store';

export interface IAppState {
  count: number;
}

export const INITIAL_STATE: IAppState = {
  count: 0
}

export function rootReducer(state: IAppState = INITIAL_STATE, action: Action): IAppState {
  console.log(state);
  switch(action.type){
    case INCREMENT: 
      return {count: state.count + 1};
  }
}