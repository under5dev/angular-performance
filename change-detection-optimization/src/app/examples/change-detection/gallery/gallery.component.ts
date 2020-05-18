import { Component, OnInit } from '@angular/core';
import {LogoModel} from "../logo-model";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  logos: Array<LogoModel> = [{ id: 1, color: 'green' }, { id: 2, color: 'orange' }];
  colors: Array<string> = ['green', 'orange', 'blue'];

  check() {
    console.log('gallery component view checked');
  }

  changeColor() {
    this.logos[0].color = this.randomColor();
  }

  private randomColor(){
    return this.colors[~~(this.colors.length * Math.random())];
  }

}
