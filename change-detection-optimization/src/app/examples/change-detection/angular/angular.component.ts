import {Component, Input} from '@angular/core';
import {LogoModel} from "../logo-model";

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent {

  @Input() angularModel: LogoModel;

  check() {
    console.log('angular component view checked');
  }

  getAngularImgUrl() {
    return `assets/angular-${this.angularModel.color}.svg`;
  }

}
