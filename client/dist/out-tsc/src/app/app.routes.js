"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resume_component_1 = require("./resume/resume.component");
var sammy_component_1 = require("./sammy/sammy.component");
var fbResolverHome_service_1 = require("./sammy/fbResolverHome.service");
var resumePicResolver_service_1 = require("./resume/resumePicResolver.service");
var projects_service_1 = require("./project/projects.service");
var routes = [
    {
        path: 'home',
        component: sammy_component_1.SammyComponent,
        resolve: {
            pics: fbResolverHome_service_1.FirebaseResolverHome,
            projects: projects_service_1.ProjectResolverService
        },
        data: {
            animation: 'home'
        }
    },
    {
        path: 'resume',
        component: resume_component_1.ResumeComponent,
        resolve: {
            pic: resumePicResolver_service_1.ResumePicResolver,
            resume: resumePicResolver_service_1.ResumeResolver
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
exports.routes = routes;
//# sourceMappingURL=app.routes.js.map