import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgMultiselectAngularComponent } from './ng-multiselect-angular.component';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
    NgMultiselectAngularComponent,
    SearchPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
  ],
  exports: [
    NgMultiselectAngularComponent
  ]
})
export class NgMultiselectAngularModule { }
