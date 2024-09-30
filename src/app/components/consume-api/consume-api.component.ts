import { Component } from '@angular/core';
import { ConsumeAPIService } from 'src/app/services/consume-api.service';

@Component({
  selector: 'app-consume-api',
  templateUrl: './consume-api.component.html',
  styleUrls: ['./consume-api.component.scss']
})
export class ConsumeAPIComponent {

    public userData: any[] = [];
    constructor(private _apiConsume: ConsumeAPIService){
      this._apiConsume.getConsumeData().subscribe((resp) =>{
        this.userData = resp.data
      })
    }

}
