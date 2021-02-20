import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material components imports
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatGridListModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatGridListModule
    ],
    declarations: [],
})
export class MaterialModule {}
