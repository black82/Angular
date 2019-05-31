import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BodyComponent} from './component/body/body.component';
import {SearchByNameComponent} from './component/search-by-name/search-by-name.component';
import {SearchbyCityComponent} from './component/searchby-city/searchby-city.component';
import {SearchbyIndustryComponent} from './component/searchby-industry/searchby-industry.component';
import {NotFountComponent} from './component/not-fount/not-fount.component';

const routers: Routes = [{
  path: '', component: BodyComponent
},
  {
    path: 'byname', component: SearchByNameComponent
  },
  {path: 'bycity', component: SearchbyCityComponent},
  {path: 'byindustry', component: SearchbyIndustryComponent},
  {path: '**', component: NotFountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
