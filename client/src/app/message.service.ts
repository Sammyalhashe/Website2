import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MessageService {
    private messageSubject = new Subject<any>();
    constructor() {}

    sendMessage(message: boolean): void {
        this.messageSubject.next({ top: message });
    }

    getMessage(): Observable<any> {
        return this.messageSubject.asObservable();
    }
}
