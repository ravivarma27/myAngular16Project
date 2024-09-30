import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-change-detection-parent',
  templateUrl: './change-detection-parent.component.html',
  styleUrls: ['./change-detection-parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionParentComponent {

  parentMsg: any;

  ngOnInit(){
    setTimeout(() => {
      this.parentMsg = "Welcome" //for change detection
    }, 2000);
  }


  triggerParent(){
    console.log("parent triggered")
  }

}
