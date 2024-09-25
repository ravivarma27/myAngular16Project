import { Component } from '@angular/core';
import { ShowApiDataService } from 'src/app/services/show-api-data.service';

@Component({
  selector: 'app-show-api-data',
  templateUrl: './show-api-data.component.html',
  styleUrls: ['./show-api-data.component.scss']
})
export class ShowApiDataComponent {

  public usersdata: any[] = []

  constructor(private _showApiData: ShowApiDataService ){
    this._showApiData.getUsersData().subscribe((resp) => {
      this.usersdata =resp.data;
    })
  }

}
