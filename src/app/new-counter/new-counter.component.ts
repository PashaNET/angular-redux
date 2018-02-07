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
    this.createCounter();
  }

  ngOnInit() {
  }

  @Output() addNewCounter: EventEmitter<any> = new EventEmitter();

  newCounter() {
    this.addNewCounter.emit(this.counter);
    this.createCounter();
  }

  createCounter() {
    this.counter = new Counter();
  }

}
