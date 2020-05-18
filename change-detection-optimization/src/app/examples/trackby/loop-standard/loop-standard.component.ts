import {Component, Input} from '@angular/core';
import {TableStandardItem} from "../table-standard-item";


@Component({
  selector: 'app-loop-standard',
  templateUrl: './loop-standard.component.html',
  styleUrls: ['./loop-standard.component.scss']
})
export class LoopStandardComponent {

  @Input()
  public data: TableStandardItem[];

  constructor() {
  }
}
