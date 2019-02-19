import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { animationsList } from './sammy.animations';

// FontAwesome imports
import {
    faTwitter,
    faFacebook,
    faInstagram,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-sammy',
    templateUrl: './sammy.component.html',
    styleUrls: ['./sammy.component.css'],
    animations: [...animationsList],
})
export class SammyComponent implements OnInit {
    profileURL: Observable<string | null>;
    picExpand: boolean;
    secondContainerReveal: boolean;

    // icons used
    faTwitter = faTwitter;
    faFacebook = faFacebook;
    faInstagram = faInstagram;
    faLinkedin = faLinkedin;
    faGithub = faGithub;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.data.subscribe(data => {
            data['pics'][0].subscribe(url => {
                this.profileURL = url;
            });
        });
        this.secondContainerReveal = false;
    }

    picInPositions(inPos): void {
        this.picExpand = inPos;
    }

    revealSecond(inPos): void {
        this.secondContainerReveal = true;
    }
}
