import { Component } from '@angular/core';
import {PhotoService} from '../app/photos/photo/photo.service'
import { Photo } from './photos/photo/photo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: Photo[]

  constructor(photoServico: PhotoService){

    photoServico.listFromName('teste').subscribe(photos =>{
      this.photos = photos
    } )
  }


}
