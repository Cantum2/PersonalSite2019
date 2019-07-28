import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    private callSource = new Subject<any>();
    called = this.callSource.asObservable();
    scrollValue: string = '';

    constructor(){}

    scroll(scrollName: string): void {
        this.scrollValue = scrollName;
        this.callSource.next();
    }
}