/// <reference path="../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {NgMediumModule} from 'ng-medium';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { PitchComponent } from './pitch/pitch.component';
import { PromiseComponent } from './promise/promise.component';
import { ServicesComponent } from './services/services.component';
import { PartnersComponent } from './partners/partners.component';
import { MediaComponent } from './media/media.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MapComponent } from './map/map.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { MapModule, MapAPILoader, BingMapAPILoaderConfig, BingMapAPILoader, WindowRef, DocumentRef, MapServiceFactory, BingMapServiceFactory } from "angular-maps";
import { NavbarComponent } from './navbar/navbar.component';

export function MapServiceProviderFactory(){
  let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey ="AsoYRfI9HLCj6MI1H_iUkpPbM9ph3Ljy87MsSG-dzvCLyB2K1n23RuHYbDyn9zUm"; // your bing map key
  bc.branch = "experimental"; 
      // to use the experimental bing brach. There are some bug fixes for
      // clustering in that branch you will need if you want to use 
      // clustering.
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}

@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SocialMediaComponent,
    PitchComponent,
    PromiseComponent,
    ServicesComponent,
    PartnersComponent,
    MediaComponent,
    BlogComponent,
    ContactUsComponent,
    MapComponent,
    SubscribeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MapModule.forRoot(),
    NgMediumModule,
  ],
  providers: [
    {
      provide: MapAPILoader, deps: [], useFactory: MapServiceProviderFactory,
  }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class AppModule { }