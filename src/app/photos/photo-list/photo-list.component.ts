import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  Photos : Photo[]

  constructor(private photoservicos: PhotoService) { }

  ngOnInit() {

    this.photoservicos.listFromName('teste').subscribe(photo =>{
      this.Photos = photo
    })
  }

}
