import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AlertModule} from 'ngx-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import {ImageService} from './shared/image.service';
import {ImageFilterPipe} from './shared/filter.pipe';
import {RouterModule} from '@angular/router';
import { appRoutes} from '../routes';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailsComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
