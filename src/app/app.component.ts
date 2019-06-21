import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TrulyUIBoilerplate';


  public dataNormal :any;

  constructor(  ) {
    this.dataNormal=[
      {
        'title':'t',
        'sdf':'t',
        'dfg':'t',
        'dfgfdg':'t',
        'dfgdfgd':'t',
      },
      {
        'title':'t',
        'sdf':'t',
        'dfg':'t',
        'dfgfdg':'t',
        'dfgdfgd':'t',
      }
    ]
  }
}
