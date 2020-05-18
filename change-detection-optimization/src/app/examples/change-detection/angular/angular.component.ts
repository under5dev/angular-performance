import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {LogoModel} from "../logo-model";
import {ColorService} from "../color.service";

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularComponent implements OnInit {

  @Input() angularModel: LogoModel;

  constructor(public colorService: ColorService){}

  check() {
    console.log('angular component view checked');
  }

  getAngularImgUrl() {
    return `assets/angular-${this.angularModel.color}.svg`;
  }

  ngOnInit(): void {
    this.colorService.color$.subscribe();
  }

}
