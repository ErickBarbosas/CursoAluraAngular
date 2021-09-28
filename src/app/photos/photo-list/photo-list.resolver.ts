import { PhotoService } from './../photo/photo.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn:'root'})

export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

  constructor(private service:PhotoService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> | Observable<Observable<Photo[]>> | Promise<Observable<Photo[]>> {
    const userName = route.params.name;
    return this.service.listFromName(userName);
  }

}
