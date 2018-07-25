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
import { HeadComponent } from './main/head/head.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { PriceComponent } from './main/price/price.component';
import { OffersComponent } from './main/offers/offers.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ShavingComponent,
    HaircutComponent,
    FooterComponent,
    HeaderComponent,
    HeadComponent,
    WelcomeComponent,
    PriceComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'barbershop' }),
    AppRoutingModule,
    LazyLoadImageModule,
    SimpleSmoothScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
