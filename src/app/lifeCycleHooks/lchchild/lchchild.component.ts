import { Component, DoCheck, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lchchild',
  templateUrl: './lchchild.component.html',
  styleUrls: ['./lchchild.component.scss']
})
export class LCHchildComponent implements OnChanges, DoCheck {

  @Input() myNumber: number = 0;

  // Correctly implementing ngOnChanges with proper casing
  ngOnChanges(changes: SimpleChanges): void {
    const newNumberChange: SimpleChange = changes['myNumber']; // Access using square brackets
    if (newNumberChange) {
      console.log("ngOnChanges() => Previous Value", newNumberChange.previousValue);
      console.log("ngOnChanges() => Current Value", newNumberChange.currentValue);
    }
  }

  ngOnInit(){
    console.log("ngOnInit() => value", this.myNumber);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck() => value", this.myNumber)
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit() => Only gets calles Once");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked() => It gets called every change")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit() => Only gets called once after ngAfterContentChecked()");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked() => Its gets called every time after ngAfterViewInit()")
  }

  ngOnDestroy(){
    console.log("Component has been DESTROYED!!!")
  }

}
