import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormsComponent } from './photo-forms/photo-forms.component';

@NgModule({
    declarations: [ PhotoComponent, PhotoListComponent, PhotoFormsComponent ],
    imports: [HttpClientModule,CommonModule],
})
export class PhotosModule {}
