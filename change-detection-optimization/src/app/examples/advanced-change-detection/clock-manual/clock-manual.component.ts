import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {map, take} from "rxjs/operators";

@Component({
  selector: 'app-clock-manual',
  templateUrl: './clock-manual.component.html',
  styleUrls: ['./clock-manual.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClockManualComponent implements OnDestroy {

  time = 0;
  timeSubscription: Subscription;

  constructor(private ref: ChangeDetectorRef) {
    this.ref.detach()
  }

  start() {
    console.log('Start clicked')
    this.timeSubscription = interval(10).pipe(
      take(1001), // 0, 1, ..., 1000
      map(time => time * 10)
    ).subscribe(time => {
      console.log(time);
      this.time = time;
      // manually trigger the change detection every second
      if (this.time % 1000 === 0) {
        console.log('Manual check')
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

  check() {
    console.log('clock-manual component view checked');
  }


}
