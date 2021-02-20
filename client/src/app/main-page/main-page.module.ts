import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SammyComponent } from '../sammy/sammy.component';
import { FirebaseResolverHome } from '../sammy/fbResolverHome.service';
import { SharedModule } from '../shared/shared.module';
import { ProjectComponent } from '../project/project.component';
import { ProjectResolverService } from '../project/projects.service';
import { ParticlesModule } from 'angular-particle';
import { ResumeModule } from '../resume/resume.module';
import { ResumeResolver } from '../resume/resumePicResolver.service';

@NgModule({
    imports: [CommonModule, SharedModule, ParticlesModule, ResumeModule],
    declarations: [SammyComponent, ProjectComponent],
    providers: [FirebaseResolverHome, ProjectResolverService, ResumeResolver],
})
export class MainPageModule {}
