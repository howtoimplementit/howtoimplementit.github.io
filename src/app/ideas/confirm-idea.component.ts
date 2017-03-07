import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {IdeaService} from "./idea.service";
import {Idea} from "./idea";

@Component({
  selector: 'app-confirm-idea',
  templateUrl: './confirm-idea.component.html',
  styleUrls: ['./confirm-idea.component.css']
})
export class ConfirmIdeaComponent implements OnInit {

  idea : Idea;

  constructor(private ideaService: IdeaService, private router: Router) { }

  ngOnInit() {
    this.idea = this.ideaService.getIdeaFromCache();
  }

  create(){
    this.ideaService.createIdea(this.idea).subscribe(res => {
      this.idea = res;
      this.ideaService.setIdea(this.idea);
      this.router.navigate(['/idea/view', this.idea._id.$oid], { queryParams: {type: 'create'} });
    });
  }

  cancel(){
    this.router.navigate(['/ideas']);
  }

  modify(){
    this.ideaService.modifyIdea(this.idea).subscribe( res => {
      this.idea = res;
      this.ideaService.setIdea(this.idea);
      this.router.navigate(['/idea/view', this.idea._id.$oid],  { queryParams:{type: 'modify'}});
    })
  }
}
