import { Component } from '@angular/core';

@Component({
  selector: 'app-change-detection-child',
  templateUrl: './change-detection-child.component.html',
  styleUrls: ['./change-detection-child.component.scss']
})
export class ChangeDetectionChildComponent {

  triggereChild(){
    console.log('Triggered child');
  }

}
