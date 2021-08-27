import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../app/photos/photo/photo.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private photoServico: PhotoService){}
}
