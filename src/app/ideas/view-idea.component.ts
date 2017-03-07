import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-idea',
  templateUrl: './view-idea.component.html',
  styleUrls: ['./view-idea.component.css']
})
export class ViewIdeaComponent implements OnInit {

  @Input() idea;

  constructor() { }

  ngOnInit() {
  }

}
