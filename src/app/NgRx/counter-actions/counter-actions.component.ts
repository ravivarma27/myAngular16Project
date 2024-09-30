import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from 'src/app/Store/counterActons';

@Component({
  selector: 'app-counter-actions',
  templateUrl: './counter-actions.component.html',
  styleUrls: ['./counter-actions.component.scss']
})
export class CounterActionsComponent {

  // @Output() increment = new EventEmitter();
  // @Output() decrement = new EventEmitter();
  // @Output() reset = new EventEmitter();

  constructor(private _store: Store<{Counter: {Counter: number}}>){}

  onIncrement(){
    // this.increment.emit()
    this._store.dispatch(increment())
  }

  onDecrement(){
    // this.decrement.emit()
    this._store.dispatch(decrement())

  }

  onReset(){
    // this.reset.emit()
    this._store.dispatch(reset())

  }

}
