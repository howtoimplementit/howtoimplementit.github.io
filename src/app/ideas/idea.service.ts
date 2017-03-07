import { Injectable } from '@angular/core';
import {Idea} from "./idea";
import {Observable} from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import 'rxjs/add/observable/of';

@Injectable()
export class IdeaService {




    idea: Idea;

  constructor(private http: Http) { }

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });


  getIdeas(): Observable<Idea[]>{
    return this.http.get('https://4kyyxbcj0m.execute-api.us-east-1.amazonaws.com/Dev').map(res => res.json());
  };

  getIdea(id: string) : Observable<Idea>{
    return this.http.get('https://4kyyxbcj0m.execute-api.us-east-1.amazonaws.com/Dev/'+ id).map(res => res.json());
  };

  createIdea(idea: Idea) : Observable<Idea>{
    return this.http.post('https://4kyyxbcj0m.execute-api.us-east-1.amazonaws.com/Dev/',
      idea, this.options).map( res => res.json());
  //  let createIdea = idea;
  //  idea._id = '568b28faff8de80e00d27263';
  //  return Observable.of(idea);
  };

  modifyIdea(idea: Idea){
   return this.http.put('https://4kyyxbcj0m.execute-api.us-east-1.amazonaws.com/Dev/' + idea._id.$oid,
     idea, this.options)
     .map(res => res.json());
     // return Observable.of(idea);
    };

  deleteIdea(idea: Idea){
    return this.http.delete('https://4kyyxbcj0m.execute-api.us-east-1.amazonaws.com/Dev/' + idea._id.$oid).map(res => res.json());
  //  return Observable.of(idea);
  };

  //SETTING SO THAT IT WILL BE AVAIABLE BETWEEN PAGES.
  setIdea(idea: Idea){
    this.idea = idea;
  }

  getIdeaFromCache() : Idea{
    return this.idea;
  }
}
