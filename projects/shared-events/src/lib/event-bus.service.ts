import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppEvent, AppEventInput, AppEventType } from './event.types';
import { filter, Subject } from 'rxjs';


@Injectable(
  {  providedIn: 'root' // <- make it singleton automatically
}
)
export class EventBusService {



  private eventSubject = new Subject<AppEvent>();

 emit<T>(event: AppEventInput<T>): void {

  this.eventSubject.next({
    ...event,
        id: crypto.randomUUID(),
    timestamp: Date.now()
  });
}


  on<T>(type: AppEventType): Observable<AppEvent<T>> {
    return this.eventSubject.asObservable().pipe(
      filter(event => event.type === type)
    );
  }

  
}
