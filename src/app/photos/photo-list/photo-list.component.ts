import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  Photos : Photo[] = []
  filter : string = '';

  constructor(private activa: ActivatedRoute)
  { }

  ngOnInit(): void {
    this.Photos= this.activa.snapshot.data['photos'];
  }

}
