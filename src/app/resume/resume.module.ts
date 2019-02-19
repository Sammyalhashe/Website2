import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ResumePicResolver, ResumeResolver } from './resumePicResolver.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
      CommonModule,
      SharedModule
  ],
    declarations: [ResumeComponent],
    providers: [
        ResumePicResolver,
        ResumeResolver
    ]
})
export class ResumeModule { }
