import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PictureScrollDirective } from '../sammy/pictureScroll.directive';

@NgModule({
    declarations: [PictureScrollDirective],
    imports: [CommonModule, MaterialModule, FontAwesomeModule],
    exports: [MaterialModule, FontAwesomeModule, PictureScrollDirective],
})
export class SharedModule {}
