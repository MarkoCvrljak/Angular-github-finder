import { Component, Input } from '@angular/core';
import {GitService} from '../services/music.service';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  providers: [ GitService ]
})
export class SearchComponent  { 
  place:string; 
  users:any;
  
  constructor(private musicService: GitService){

  }
 
  search(place: string) {
    this.musicService.getUsersByPlace(place).subscribe(
        users => {
          this.users = users;
        })
      console.log(this.users);
  }
  
}