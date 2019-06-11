import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {BodyComponent} from './component/body/body.component';
import {ClockComponent} from './component/clock/clock.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchByIdComponent} from './component/search-by-id/search-by-id.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing-module';
import {SearchbyCityComponent} from './component/searchby-city/searchby-city.component';
import {SearchbyIndustryComponent} from './component/searchby-industry/searchby-industry.component';
import {NotFountComponent} from './component/not-fount/not-fount.component';
import {ClientServiceService} from './service/clientService.service';
import {FilterPipe} from './component/searchby-industry/filter.pipe';
import {AppAlertvalitationInputComponent} from './component/app-alert-valitation-input-by-empty/app-alertvalitation-input.component';

import {MatAutocompleteModule, MatFormFieldModule, MatInputModule} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ClockComponent,
    SearchByIdComponent,
    SearchbyCityComponent,
    SearchbyIndustryComponent,
    NotFountComponent,
    FilterPipe,
    AppAlertvalitationInputComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatInputModule

  ],
  providers: [ClientServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
