import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      MaterialModule,
      FontAwesomeModule
  ],
    exports: [
        MaterialModule,
        FontAwesomeModule
    ]
})
export class SharedModule { }
