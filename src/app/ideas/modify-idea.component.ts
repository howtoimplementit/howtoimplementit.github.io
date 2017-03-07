import { Component, OnInit, Input } from '@angular/core';
import {Idea} from "./idea";
import {Router, ActivatedRoute} from "@angular/router";
import {IdeaService} from "./idea.service";

@Component({
  selector: 'app-modify-idea',
  templateUrl: './modify-idea.component.html',
  styleUrls: ['./modify-idea.component.css']
})
export class ModifyIdeaComponent implements OnInit {

  idea:  Idea;

  constructor(private route: ActivatedRoute,private ideaService: IdeaService, private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { idea: Idea }) => {
        this.idea = data.idea;
      });
  }

  confirm(){
    this.ideaService.setIdea(this.idea);
    this.router.navigate(['/idea/confirm']);
  }

}
