// Angular imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Application Imports

// External Imports
import { Observable } from 'rxjs';
import {
    faPython,
    faAngular,
    faHtml5,
    faCss3,
    faJsSquare,
    faJava,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
    pictureURL: Observable<string | null>;
    resumeURL: Observable<string | null>;

    // font awesome icons
	faHome = faHome;
    faPhone = faPhone;
    faEnvelope = faEnvelope;
    faPython = faPython;
    faAngular = faAngular;
    faJS = faJsSquare;
    faJava = faJava;
    faFacebook = faFacebook;
    faTwitter = faTwitter;
    faInstagram = faInstagram;
    faLinkedin = faLinkedin;
    faGithub = faGithub;
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.data.subscribe(data => {
            this.pictureURL = data['pic'];
            this.resumeURL = data['resume'];
        });
    }
}
