import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll/lib';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ShavingComponent } from './shaving/shaving.component';
import { HaircutComponent } from './haircut/haircut.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ShavingComponent,
    HaircutComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
    SimpleSmoothScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
