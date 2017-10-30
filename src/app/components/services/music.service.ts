import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GitService{
    private searchUsersEndPoint = "https://api.github.com/search/users?q=";
    private getUserDetailsEndPoint = "https://api.github.com/users/";
    private getUserRepos = "https://api.github.com/users/";
    
    constructor(private http:Http){
       
    }

    getUsersByPlace(place: string) {
        let url;
        url = `${this.searchUsersEndPoint}location:${place}`;
        return this.http.get(url)
        .map(this.extractData);
        }

      private extractData(res: Response) {
        let body = res.json();
        return body.items || {};
      }

      
    getDetailsByUserName(username: string) {
        if (username) {
          let url = `${this.getUserDetailsEndPoint}${username}`;
          return this.http.get(url)
            .map((res: Response) => res.json())
            
        }
    }

    getUserReposByName(username: string) {
      if (username) {
        let url = `${this.getUserRepos}${username}/repos`;
        return this.http.get(url)
          .map((res: Response) => res.json())
          
      }
  }
    
    
}