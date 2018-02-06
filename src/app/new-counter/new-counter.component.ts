import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Counter } from '../counter.model';

@Component({
  selector: 'app-new-counter',
  templateUrl: './new-counter.component.html',
  styleUrls: ['./new-counter.component.styl']
})
export class NewCounterComponent implements OnInit {
  counter: Counter;

  constructor() { 
    this.counter = new Counter();
  }

  ngOnInit() {
  }

  @Output() addNewCounter: EventEmitter<any> = new EventEmitter();

  newCounter() {
    this.addNewCounter.emit(this.counter);
  }

}
