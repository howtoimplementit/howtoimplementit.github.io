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
export class IdeaListResolver implements Resolve<Idea[]> {


  constructor(private ideaService: IdeaService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Idea[]> {
    return this.ideaService.getIdeas().map(data => {
      if (data) {
        return data;
      } else {
        this.router.navigate(['/home']);
        return null;
      }
    }).first();
  }

}
