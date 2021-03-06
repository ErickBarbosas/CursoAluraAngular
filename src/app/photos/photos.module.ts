import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormsComponent } from './photo-forms/photo-forms.component';
import { PhotosComponent } from './photo-list/photos/photos.component';

@NgModule({
    declarations: [
      PhotoComponent,
       PhotoListComponent,
        PhotoFormsComponent,
         PhotosComponent,
         FilterByDescription
    ],
    imports: [HttpClientModule,CommonModule],
})
export class PhotosModule {}
