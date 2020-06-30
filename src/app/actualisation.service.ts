import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ActualisationService {
    public actualiserPublication: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public actualiserFAQ: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}