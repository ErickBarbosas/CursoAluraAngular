import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Console } from 'console';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: Object[] = []

  constructor(http: HttpClient){

    http.get<object[]>('http://localhost:3000/flavio/photos').subscribe
    (photo => this.photos = photo,
      erro => console.log(erro)

      )


  }


}
