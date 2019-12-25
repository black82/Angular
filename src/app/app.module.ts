import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {BodyComponent} from './component/body/body.component';
import {ClockComponent} from './component/clock/clock.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchByIdComponent} from './component/search-by-id/search-by-id.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing-module';
import {SearchbyCityComponent} from './component/searchby-city/searchby-city.component';
import {SearchbyIndustryComponent} from './component/searchby-industry/searchby-industry.component';
import {NotFountComponent} from './component/not-fount/not-fount.component';
import {ClientServiceService} from './service/httpclient/clientService.service';
import {AppAlertvalitationInputComponent} from './component/app-alert-valitation-input-by-empty/app-alertvalitation-input.component';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PanelComponent} from './component/app-panel/panel.component';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {CarouselModule, CollapseModule, ModalModule} from 'ngx-bootstrap';
import {NgbCarouselModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './component/login/login.component';
import {RegisterComponent} from './component/register/register.component';
import {TokenInterceptor} from './service/httpclient/TokenInterceptor';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {LisTablesComponent} from './component/listtables/lis-tables.component';
import {OncomingComponent} from './component/oncompany/oncoming.component';
import {AnimationCursorComponent} from './component/animation-cursor/animation-cursor.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {BycityandbranchComponent} from './component/bycityandbranch/bycityandbranch.component';
import {MatIconModule} from "@angular/material/icon";


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
    AppAlertvalitationInputComponent,
    PanelComponent,
    LoginComponent,
    RegisterComponent,
    LisTablesComponent,
    OncomingComponent,
    AnimationCursorComponent,
    LisTablesComponent,
    BycityandbranchComponent
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
    MatInputModule,
    CollapseModule,
    AccordionModule.forRoot(),
    CarouselModule,
    NgbCarouselModule,
    MatCardModule,
    MatProgressSpinnerModule,
    NgbTypeaheadModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    ModalModule.forRoot(),
    MatIconModule,
  ],
  providers: [ClientServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
