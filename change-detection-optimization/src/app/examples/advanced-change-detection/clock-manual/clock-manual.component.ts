import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {map, take} from "rxjs/operators";

@Component({
  selector: 'app-clock-manual',
  templateUrl: './clock-manual.component.html',
  styleUrls: ['./clock-manual.component.scss']
})
export class ClockManualComponent implements OnDestroy {

  time = 0;
  timeSubscription: Subscription;

  constructor(private ref: ChangeDetectorRef) {
    this.ref.detach()
  }

  start() {
    this.timeSubscription = interval(10).pipe(
      take(1001), // 0, 1, ..., 1000
      map(time => time * 10)
    ).subscribe(time => {
      this.time = time;
      // manually trigger the change detection every second
      if (this.time % 1000 === 0) {
        this.ref.detectChanges();
      }
    });
  }

  getTime() {
    return this.time;
  }

  ngOnDestroy() {
    this.timeSubscription.unsubscribe();
  }

}
