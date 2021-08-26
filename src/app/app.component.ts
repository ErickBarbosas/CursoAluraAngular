import { Component } from '@angular/core';
import {PhotoService} from '../app/photos/photo/photo.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: Object[] = []

  constructor(photoServico: PhotoService){

    photoServico.listFromName('teste').subscribe(photo => this.photos = photo)
  }


}
