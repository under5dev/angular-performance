import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoopStandardComponent } from './examples/trackby/loop-standard/loop-standard.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { TrackbyDemoComponent } from './examples/trackby/trackby-demo/trackby-demo.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import { LoopAsyncComponent } from './examples/trackby/loop-async/loop-async.component';
import { LoopAsyncTrackbyComponent } from './examples/trackby/loop-async-trackby/loop-async-trackby.component';
import { ImageComponent } from './examples/change-detection/image/image.component';
import { AngularComponent } from './examples/change-detection/angular/angular.component';
import { GalleryComponent } from './examples/change-detection/gallery/gallery.component';
import { ClockComponent } from './examples/advanced-change-detection/clock/clock.component';
import { ClockManualComponent } from './examples/advanced-change-detection/clock-manual/clock-manual.component';
import { ClockOutsideZoneComponent } from './examples/advanced-change-detection/clock-outside-zone/clock-outside-zone.component';
import { ClockDomManipulationComponent } from './examples/advanced-change-detection/clock-dom-manipulation/clock-dom-manipulation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoopStandardComponent,
    TrackbyDemoComponent,
    LoopAsyncComponent,
    LoopAsyncTrackbyComponent,
    ImageComponent,
    AngularComponent,
    GalleryComponent,
    ClockComponent,
    ClockManualComponent,
    ClockOutsideZoneComponent,
    ClockDomManipulationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
