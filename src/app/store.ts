import { INCREMENT, DOUBLE_INCREMENT, ADD_COUNTER } from './actions';
import { ActionReducer } from '@ngrx/store';
import { Counter } from './counter.model';

export interface IAppState {
  counters: Array<Counter>;
}

interface Action {
  type: string;
  payload: any;
}

export const INITIAL_STATE: Array<Counter> = [];

export function rootReducer(state: Array<Counter> = INITIAL_STATE, action: Action): Array<Counter> {
  switch(action.type){
    case ADD_COUNTER: 
      return [action.payload, ...state];
    case INCREMENT: 
      const count_value = ++action.payload.counter;
      return state.map( item => item.value == action.payload.value ? Object.assign({}, count, item) : item);
    case DOUBLE_INCREMENT:
      const count = --action.payload.counter;
      return state.map( item => item.value == action.payload.value ? Object.assign({}, count, item) : item);
  }
}       