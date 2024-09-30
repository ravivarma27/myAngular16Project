import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss']
})
export class CounterDisplayComponent {

// @Input() counter: any;

  Counter!: number;
counter: any;

  constructor(private _store: Store<{Counter: {Counter: number}}>){}

  ngOnInit(){
    this._store.select('Counter')
    .subscribe((data: any) => {
      this.Counter = data.Counter.Counter;
  })
}

}
