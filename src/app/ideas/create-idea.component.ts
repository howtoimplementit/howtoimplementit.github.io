import { Component, OnInit } from '@angular/core';
import {Idea} from "./idea";
import {Router} from "@angular/router";
import {IdeaService} from "./idea.service";

@Component({
  selector: 'app-create-idea',
  templateUrl: './create-idea.component.html',
  styleUrls: ['./create-idea.component.css']
})
export class CreateIdeaComponent implements OnInit {

  idea: Idea;

  constructor(private ideaService: IdeaService, private router: Router) { }

  ngOnInit() {
    this.idea = this.ideaService.getIdeaFromCache();
    if(this.idea == null || this.idea._id != null){
      this.idea = new Idea();
    }
  }

  confirm(){
    this.ideaService.setIdea(this.idea);
    this.router.navigate(['/idea/confirm']);
  }

}
