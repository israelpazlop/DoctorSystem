import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  constructor() {
    this.subscription = this.returnObservable().subscribe(
      number => console.log('Subscriber', number),
      error => console.error('Error into observer', error),
      ( ) => console.log('The observer finish')
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  returnObservable(): Observable<any>{
    return new Observable( ( observer: Subscriber<any>) => {
      let count = 0;
      let interval = setInterval(() => {

        count += 1;

        const result = {
          value: count
        };

        observer.next( result);

      }, 1000 );
    }).pipe(
      map( resp => resp.value ),
      filter( (value, index) => {
        if ( (value % 2) === 1) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

}
