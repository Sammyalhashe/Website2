import { Injectable } from '@angular/core';
import { IProject } from './project';
import { Observable, of } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import {
    RouterStateSnapshot,
    ActivatedRouteSnapshot,
    Resolve,
} from '@angular/router';

@Injectable()
export class ProjectResolverService implements Resolve<IProject[]> {
    constructor(private db: AngularFirestore) {}

    getProjects(): Observable<Array<IProject>> {
        return this.db.collection('Projects').valueChanges() as Observable<
            Array<IProject>
        >;
    }

    resolve(
        _: ActivatedRouteSnapshot,
        __: RouterStateSnapshot
    ): Observable<IProject[]> {
        return this.db
            .collection('Projects')
            .valueChanges()
            .pipe(
                take(1),
                mergeMap(data => {
                    if (data) {
                        return of(data) as Observable<IProject[]>;
                    } else {
                        return of(null);
                    }
                })
            );
    }
}
