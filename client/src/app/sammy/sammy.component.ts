// Angular imports
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

// FontAwesome imports
import {
    faTwitter,
    faFacebook,
    faInstagram,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

// project imports
import { IProject } from '../project/project';
import { animationsList } from './sammy.animations';
import { MessageService } from '../message.service';
import { ResumeResolver } from '../resume/resumePicResolver.service';

@Component({
    selector: 'app-sammy',
    templateUrl: './secondary.html',
    styleUrls: ['./sammy.component.css'],
    animations: [...animationsList],
})
export class SammyComponent implements OnInit, OnDestroy {
    urlSubscription: Subscription;
    messageSubscription: Subscription;
    profileURL: Observable<string | null>;
    resumeURL: string;
    picExpand: boolean;
    secondContainerReveal: boolean;
    thirdContainerReveal: boolean;
    projects: Observable<Array<IProject>>;
    myStyle: object = {};
    myParams: object = {};
    width = 100;
    height = 100;

    // icons used
    faTwitter = faTwitter;
    faFacebook = faFacebook;
    faInstagram = faInstagram;
    faLinkedin = faLinkedin;
    faGithub = faGithub;

    constructor(
        private route: ActivatedRoute,
        private message: MessageService,
        private resume: ResumeResolver
    ) {}

    ngOnInit(): void {
        this.secondContainerReveal = false;
        this.thirdContainerReveal = false;
        this.myStyle = {
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: '10%',
            left: 0,
            right: 0,
            bottom: 0,
        };

        this.myParams = {
            particles: {
                number: {
                    value: 50,
                },
                color: {
                    value: '#ff0000',
                },
                shape: {
                    type: 'triangle',
                },
            },
        };

        // this.projects = this.ps.getProjects();
        this.urlSubscription = this.route.data.subscribe(data => {
            data['pics'][0].subscribe((url: Observable<string>) => {
                this.profileURL = url;
            });
            this.projects = data['projects'];
        });
        this.messageSubscription = this.message.getMessage().subscribe(data => {
            this.picInPositions(data.top);
            if (!data.top) {
                this.revealSecond(data.top);
            }
        });
        this.resume.getResume().subscribe(res => {
            this.resumeURL = res;
        });
        console.log(this.resumeURL);
    }

    ngOnDestroy(): void {
        this.urlSubscription.unsubscribe();
        this.messageSubscription.unsubscribe();
    }

    picInPositions(inPos): void {
        this.picExpand = inPos;
    }

    revealSecond(inPos): void {
        this.secondContainerReveal = true;
    }
}
