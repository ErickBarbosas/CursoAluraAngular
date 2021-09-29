import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { Photo } from './photos/photo/photo';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";


import { PhotoFormsComponent } from './photos/photo-forms/photo-forms.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { resolve } from 'url';

const routes: Routes = [

  {path: 'user/:name',component: PhotoListComponent,
    resolve: {
      photos:PhotoListResolver
    }
  },
  
  {path: 'p/add', component:PhotoFormsComponent},
  {path: '**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports:[RouterModule]
})

export class AppRoutingModule{

}
