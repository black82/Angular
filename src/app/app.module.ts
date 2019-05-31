import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {BodyComponent} from './component/body/body.component';
import {ClockComponent} from './component/clock/clock.component';
import {FormsModule} from '@angular/forms';
import {SearchByNameComponent} from './component/search-by-name/search-by-name.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing-module';
import { SearchbyCityComponent } from './component/searchby-city/searchby-city.component';
import { SearchbyIndustryComponent } from './component/searchby-industry/searchby-industry.component';
import { NotFountComponent } from './component/not-fount/not-fount.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ClockComponent,
    SearchByNameComponent,
    SearchbyCityComponent,
    SearchbyIndustryComponent,
    NotFountComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
