import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ActivatedRouteComponent } from './activatedroute/activatedroute.component';
import { MainComponent } from './main/main.component';
import { RouterPartsComponent } from './routerparts/routerparts.component';
import { RouterEventComponent } from './routerevent/routerevent.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ActivatedRouteComponent,
    MainComponent,
    RouterPartsComponent,
    RouterEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
