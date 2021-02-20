import { Component, OnInit } from '@angular/core';
import { animationList } from './app.animations';
import {
    Router,
    Event,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError,
} from '@angular/router';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from './message.service';

interface RouteDef {
    name: string;
    path: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [...animationList],
})
export class AppComponent implements OnInit {
    loading: boolean;
    faSpinner = faSync;
    routeTitles: RouteDef[] = [
        { name: 'Resume', path: 'resume' },
        // { name: 'Projects', path: 'projects' },
    ];

    constructor(private router: Router, private message: MessageService) {
        this.router.events.subscribe((routerEvent: Event) => {
            if (routerEvent instanceof NavigationStart) {
                this.loading = true;
            }

            if (
                routerEvent instanceof NavigationEnd ||
                routerEvent instanceof NavigationCancel ||
                routerEvent instanceof NavigationError
            ) {
                this.loading = false;
            }
        });
    }

    ngOnInit(): void {}

    sendMessage($event): void {
        this.message.sendMessage($event);
    }

    prepRouteState(outlet: any): void {
        return outlet.activatedRouteData['animation'] || 'home';
    }
}
