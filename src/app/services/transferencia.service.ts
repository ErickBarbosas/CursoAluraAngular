import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
private listatransferencia: any [];
private url = 'http://localhost:3000/transferencias';

constructor(private httpCliente: HttpClient) {
  this.listatransferencia =[];
}

get transferencias(){
return this.listatransferencia;
}

todas(): Observable<Transferencia[]>{
  return this.httpCliente.get<Transferencia[]>(this.url);
}

private hidratar(transferencia: any){
  transferencia.data= new Date();
}

adicionar(transferencia: any){
  this.hidratar(transferencia);
  this.listatransferencia.push(transferencia);
}
}
