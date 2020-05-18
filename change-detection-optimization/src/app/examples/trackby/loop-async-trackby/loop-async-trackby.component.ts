import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {TableStandardItem} from "../table-standard-item";

@Component({
  selector: 'app-loop-async-trackby',
  templateUrl: './loop-async-trackby.component.html',
  styleUrls: ['./loop-async-trackby.component.scss']
})
export class LoopAsyncTrackbyComponent {

  @Input()
  public data$: Observable<TableStandardItem[]>;

  constructor() { }

  public trackByIdAndName(index: number, item: TableStandardItem) {
    return `${item.id}-${item.name}`
  }

}
