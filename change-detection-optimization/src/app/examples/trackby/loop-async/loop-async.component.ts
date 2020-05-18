import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {TableStandardItem} from "../table-standard-item";

@Component({
  selector: 'app-loop-async',
  templateUrl: './loop-async.component.html',
  styleUrls: ['./loop-async.component.scss']
})
export class LoopAsyncComponent {

  @Input()
  public data$: Observable<TableStandardItem[]>;

  constructor() { }

}
