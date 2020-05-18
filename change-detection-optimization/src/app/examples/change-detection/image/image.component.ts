import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent implements OnChanges {
  @Input() src: string;

  check() {
    console.log('image component view checked');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On changes from image', changes);
  }
}
