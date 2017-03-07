import { Injectable }             from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Idea} from "./idea";
import {IdeaService} from "./idea.service";
import {Observable} from "rxjs/Rx";


import 'rxjs/add/operator/first'
@Injectable()
export class IdeaResolver implements Resolve<Idea> {


  constructor(private ideaService: IdeaService, private router: Router) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Idea> {
    let id = route.params['id'];
    return this.ideaService.getIdea(id).map(data => {
      if (data) {
        return data;
      } else {
        this.router.navigate(['/ideas']);
        return null;
      }
    }).first();
  }

}
