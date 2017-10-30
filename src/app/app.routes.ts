import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { AboutComponent }  from '../app/components/about/about.component';
import { DetailComponent }  from '../app/components/detail/detail.component';
import { ReposComponent }  from '../app/components/repos/repos.component';

const routes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search',  component: SearchComponent },
    { path: 'about',  component: AboutComponent },
    { path: 'details/:login',  component: DetailComponent },
    { path: 'repos/:login',  component:ReposComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}