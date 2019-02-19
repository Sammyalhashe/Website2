import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { SammyComponent } from './sammy/sammy.component';
import { FirebaseResolverHome } from './sammy/fbResolverHome.service';
import { ResumePicResolver, ResumeResolver } from './resume/resumePicResolver.service';

const routes: Routes = [
    {
        path: 'home',
        component: SammyComponent,
        resolve: {
            pics: FirebaseResolverHome
        },
        data: {
            animation: 'home'
        }
    },
    {
        path: 'resume',
        component: ResumeComponent,
        resolve: {
            pic: ResumePicResolver,
            resume: ResumeResolver
        },
        data: {
            animation: 'resume'
        }
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

export {routes};
