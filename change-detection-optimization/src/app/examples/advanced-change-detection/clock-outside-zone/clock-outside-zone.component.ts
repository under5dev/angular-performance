import {Component, ElementRef, NgZone, OnDestroy, ViewChild} from '@angular/core';
import {map, take} from "rxjs/operators";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-clock-outside-zone',
  templateUrl: './clock-outside-zone.component.html',
  styleUrls: ['./clock-outside-zone.component.scss']
})
export class ClockOutsideZoneComponent implements OnDestroy {
  time: number;
  timeSubscription: Subscription;
  @ViewChild('clockZone') clock: ElementRef<HTMLParagraphElement>;

  constructor(private zone: NgZone) {
  }

  start() {
    this.zone.runOutsideAngular(() => {
      this.timeSubscription = interval(10).pipe(
        take(1001), // 0, 1, ..., 1000
        map(time => time * 10),
      ).subscribe(time => {
        this.time = time;
        if (this.time % 1000 === 0) {
          this.clock.nativeElement.textContent = `${time}`;
        }
      });
    });
  }

  ngOnDestroy() {
    this.timeSubscription.unsubscribe();
  }

}
