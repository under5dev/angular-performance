import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {LogoModel} from "../logo-model";
import {TableStandardItem} from "../../trackby/table-standard-item";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {

  logos: Array<LogoModel> = [{ id: 1, color: 'green' }, { id: 2, color: 'orange' }];
  colors: Array<string> = ['green', 'orange', 'blue'];

  check() {
    console.log('gallery component view checked');
  }

  changeColor() {
    const logo0 = this.logos[0];
    const newLogo = {...logo0, color: this.randomColor() };
    this.logos[0] = newLogo;
  }

  private randomColor(){
    return this.colors[~~(this.colors.length * Math.random())];
  }

  public trackById(index: number, item: LogoModel) {
    return item.id
  }

}
