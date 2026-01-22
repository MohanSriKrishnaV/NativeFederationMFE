import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppEvent, AppEventType } from './event.types';
import { filter, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private eventSubject = new Subject<AppEvent>();

  emit<T>(event: AppEvent<T>): void {
    this.eventSubject.next({
      ...event,
      timestamp: Date.now()
    });
  }

  on<T>(type: AppEventType): Observable<AppEvent<T>> {
    return this.eventSubject.asObservable().pipe(
      filter(event => event.type === type)
    );
  }

  
}
