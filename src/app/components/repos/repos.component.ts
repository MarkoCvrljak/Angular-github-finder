import { Component, OnInit } from '@angular/core';
import {GitService} from '../services/music.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'repos',
  templateUrl: 'repos.component.html',
  providers: [ GitService ]
})
export class ReposComponent implements OnInit  { 
   login:string;
   repos:any;

    constructor(private detailService: GitService,
    private route: ActivatedRoute ){
        
          }

    ngOnInit(){
        this.route.params.map(params => params['login'])
        .subscribe((login) => {
            this.detailService.getUserReposByName(login)
            .subscribe(detail => {
                this.repos = detail;

                console.log(this.repos)
            })
        })
    }      
}

