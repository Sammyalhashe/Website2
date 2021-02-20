import {
    Component,
    OnInit,
    HostListener,
    ChangeDetectionStrategy,
    Input,
} from '@angular/core';
import { IProject } from './project';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { animationList } from './project.animations';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css'],
    animations: [animationList],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit {
    @Input()
    projects: Observable<Array<IProject>>;
    innerWidth: number;

    // font awesome icons
    faGithub = faGithub;
    faCode = faCode;
    constructor() {}

    @HostListener('window:resize', ['$event'])
    onResize($event): void {
        this.innerWidth = $event.target.innerWidth;
    }

    ngOnInit() {
        this.innerWidth = window.innerWidth;
    }
}
