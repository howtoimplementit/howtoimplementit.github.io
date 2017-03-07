import { Component, OnInit } from '@angular/core';
import {Idea} from "./idea";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {IdeaService} from "./idea.service";


@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {

  idea: Idea;

  actionTitle : string;


  constructor(private route: ActivatedRoute,
              private router: Router, private ideaService : IdeaService) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { idea: Idea }) => {
        this.idea = data.idea;
        if(this.idea == null || this.idea._id == null ){
          this.router.navigate(['/ideas']);
        }
      });
    this.route.queryParams.subscribe(params => {
      let type = params['type'];
      if(type === 'create'){
        this.actionTitle = 'Idea Created';
      }else if (type === 'modify'){
        this.actionTitle = 'Idea Modified';
      }
    });

  }

  modify(){
    this.router.navigate(['/idea/modify', this.idea._id.$oid]);

  }

  delete(){
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.ideaService.deleteIdea(this.idea).subscribe(
        res => {
          this.actionTitle = 'Idea Deleted';
        }
      )
    }
  }

  cancel(){
    this.router.navigate(['/ideas']);
  }

}
