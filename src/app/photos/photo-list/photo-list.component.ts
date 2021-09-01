import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  Photos : Photo[]

  constructor
  (
    private photoservicos: PhotoService,
    private activa: ActivatedRoute
  )
  { }

  ngOnInit() {
    const nome = this.activa.snapshot.params.name;
    this.photoservicos.listFromName(nome).subscribe(photo =>{
      this.Photos = photo
    })
  }

}
