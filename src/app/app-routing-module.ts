import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BodyComponent} from './component/body/body.component';
import {SearchByIdComponent} from './component/search-by-id/search-by-id.component';
import {SearchbyCityComponent} from './component/searchby-city/searchby-city.component';
import {SearchbyIndustryComponent} from './component/searchby-industry/searchby-industry.component';
import {NotFountComponent} from './component/not-fount/not-fount.component';
import {LoginComponent} from './component/login/login.component';
import {RegisterComponent} from './component/register/register.component';

const routers: Routes = [{
  path: '',
  component: BodyComponent
},
  {
    path: 'byid',
    component: SearchByIdComponent
  },
  {
    path: 'bycity',
    component: SearchbyCityComponent
  },
  {
    path: 'byindustry',
    component: SearchbyIndustryComponent
  },
  // {
  //   path: '**',
  //   component: NotFountComponent
  // },
  {
    path: 'error',
    component: NotFountComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
