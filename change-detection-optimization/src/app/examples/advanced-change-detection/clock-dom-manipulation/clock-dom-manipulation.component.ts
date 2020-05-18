import {ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {map, take} from "rxjs/operators";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-clock-dom-manipulation',
  templateUrl: './clock-dom-manipulation.component.html',
  styleUrls: ['./clock-dom-manipulation.component.scss']
})
export class ClockDomManipulationComponent implements OnDestroy {
  time: number;
  timeSubscription: Subscription;
  @ViewChild('clockDom') clock: ElementRef<HTMLParagraphElement>;

  constructor(private ref: ChangeDetectorRef) {
    //this.ref.detach();
  }

  start() {
    this.timeSubscription = interval(10).pipe(
      take(1001), // 0, 1, ..., 1000
      map(time => time * 10)
    ).subscribe(time => {
      this.time = time;
      if (this.time % 1000 === 0) {
        this.clock.nativeElement.textContent = `${time}`;
      }
    });
  }

  ngOnDestroy() {
    this.timeSubscription.unsubscribe();
  }

}
