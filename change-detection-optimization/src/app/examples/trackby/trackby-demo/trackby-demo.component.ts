import { Component, OnInit } from '@angular/core';
import {LoopDataProviderService} from "../loop-data-provider.service";

@Component({
  selector: 'app-trackby-demo',
  templateUrl: './trackby-demo.component.html',
  styleUrls: ['./trackby-demo.component.scss']
})
export class TrackbyDemoComponent implements OnInit {

  public id: number;
  public name: string;

  constructor(public dataProvider: LoopDataProviderService) { }

  ngOnInit(): void {
  }

  public update() {
    this.dataProvider.mutateItem(this.id, this.name);
    this.dataProvider.updateImmutableData(this.id, this.name);
  }

  check() {
    console.log('trackby demo component view checked');
  }

}
