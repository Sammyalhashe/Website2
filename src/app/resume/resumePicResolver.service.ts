// Angular Imports
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

// RxJS Imports
import { Observable } from 'rxjs';

// Angularfire2 imports
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable()
export class ResumePicResolver implements Resolve<Observable<string | null>> {
  constructor(private storage: AngularFireStorage) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.storage
      .ref('Photos/SanFranBeach.jpg')
      .getDownloadURL() as Observable<string | null>;
  }
}

@Injectable()
export class ResumeResolver
  implements Resolve<Observable<string | null>> {
  constructor(private storage: AngularFireStorage) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.storage
      .ref('Downloadable/resume.pdf')
      .getDownloadURL() as Observable<string | null>;
  }
}
