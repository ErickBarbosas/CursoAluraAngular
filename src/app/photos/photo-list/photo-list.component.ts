import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  Photos : Photo[] = []
  filter : string = '';
  debounce: Subject<string>= new Subject<string>();
  constructor(private activa: ActivatedRoute)
  { }

  ngOnInit(): void {
    this.Photos= this.activa.snapshot.data['photos'];
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.filter = filter);
  }

}
