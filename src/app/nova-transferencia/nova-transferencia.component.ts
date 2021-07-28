import { Component, Output, OnInit, EventEmitter } from "@angular/core";


@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

    transferir(){
      console.log('Solicitada Nova Transferencia');
      const valorEmitir = {valor: this.valor,destino: this.destino};
     this.aoTransferir.emit(valorEmitir);

    }

}
