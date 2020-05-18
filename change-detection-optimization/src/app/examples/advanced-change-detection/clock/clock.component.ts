import {Component, OnDestroy} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {map, take} from "rxjs/operators";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnDestroy {

  time = 0;
  timeSubscription: Subscription;

  start() {
    this.timeSubscription = interval(10).pipe(
      take(1001), // 0, 1, ..., 1000
      map(time => time * 10)
    ).subscribe(time => this.time = time);
  }

  getTime() {
    return this.time;
  }

  ngOnDestroy() {
    this.timeSubscription.unsubscribe();
  }

}
