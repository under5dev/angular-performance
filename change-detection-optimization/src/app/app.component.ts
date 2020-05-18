import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'change-detection-optimization';

  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event => {
      alert('New version');
      window.location.reload();
    });
  }

  check() {
    console.log('app component view checked');
  }
}
