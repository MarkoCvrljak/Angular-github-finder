import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { GitService } from './components/services/music.service';


import { AppComponent }  from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { DetailComponent } from './components/detail/detail.component';
import { ReposComponent } from './components/repos/repos.component';


import { AppRoutingModule }     from './app.routes';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, ReposComponent, NavBarComponent, AboutComponent, SearchComponent, DetailComponent ],
  providers:    [ GitService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
