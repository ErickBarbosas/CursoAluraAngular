import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos:Photo[] = [];
  rows: any[]=[];

  constructor() { }

  ngOnChanges(chenges : SimpleChanges){

    if(chenges.photos)
    {
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photo: Photo[]=[]){
    const newRows=[];

    for(let index = 0; index < photo.length; index+=3){
        newRows.push(photo.slice(index,index +3));
      }
      return newRows
  }
}
