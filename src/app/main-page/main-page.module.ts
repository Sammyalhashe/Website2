import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SammyComponent } from '../sammy/sammy.component';
import { FirebaseResolverHome } from '../sammy/fbResolverHome.service';
import { PictureScrollDirective } from '../sammy/pictureScroll.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [SammyComponent, PictureScrollDirective],
    providers: [FirebaseResolverHome],
})
export class MainPageModule {}
