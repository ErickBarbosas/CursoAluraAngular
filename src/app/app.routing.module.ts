import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";


import { PhotoFormsComponent } from './photos/photo-forms/photo-forms.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';

const routes: Routes = [

  {path: 'user/flavio',component: PhotoListComponent},
  {path: 'p/add', component:PhotoFormsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports:[RouterModule]
})

export class AppRoutingModule{

}
