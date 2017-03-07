import { Component, OnInit } from '@angular/core';
import {Idea} from "./idea";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ideas',
  templateUrl: './ideaList.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaListComponent implements OnInit {

  ideas: Idea[];


  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { ideas: Idea[] }) => {
        this.ideas = data.ideas;
      });
  }


  onSelect(idea: Idea) {
    // Navigate with relative link
    this.router.navigate(['/idea]', idea._id ]);
  }


}
