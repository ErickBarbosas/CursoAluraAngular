import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponet } from './nova-transferencia/nova-transferencia.componet';

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponet
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
