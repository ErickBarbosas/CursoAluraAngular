import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({providedIn:'root'})
export class PhotoService{

  API = 'http://localhost:3000'

  constructor(private http: HttpClient){}

  listFromName(nameUser :string)
  {
    return this.http.get<object[]>(this.API+'/flavio/photos')

  }


}
