import { Component, OnInit } from '@angular/core';
import {GitService} from '../services/music.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'detail',
  templateUrl: 'detail.component.html',
  providers: [ GitService ]
})
export class DetailComponent implements OnInit  { 
   login:string;
   detail:any;

    constructor(private detailService: GitService,
    private route: ActivatedRoute ){
        
          }

    ngOnInit(){
        this.route.params.map(params => params['login'])
        .subscribe((login) => {
            this.detailService.getDetailsByUserName(login)
            .subscribe(detail => {
                this.detail = detail;

                console.log(this.detail)
            })
        })
    }      
}

