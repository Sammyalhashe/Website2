import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material components imports
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
      CommonModule,
      MatButtonModule,
      MatToolbarModule
  ],
    exports: [
        MatButtonModule,
        MatToolbarModule
    ],
  declarations: []
})
export class MaterialModule { }
