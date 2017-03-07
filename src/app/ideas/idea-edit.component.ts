import { Component, OnInit, Input} from '@angular/core';
import {Idea} from "./idea";
import {Router, ActivatedRoute} from "@angular/router";


@Component({
  selector: 'edit-idea',
  templateUrl: './idea-edit.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaEditComponent implements OnInit {

  @Input() idea: Idea;

  tags: { id: string, name: string, selected:boolean }[];

  constructor() {
  }

  ngOnInit() {
    this.tags = [{id:'Technology', name: 'Technology', selected:false},
                  {id:'Health Care' ,name: 'Healthcare', selected:false},
                  {id:'Artificial Intelligence',name: 'Artificial Intelligence', selected:false},
      {id:'Marketing',name: 'Marketing', selected:false},
      {id:'CRM',name: 'CRM', selected:false},
      {id:'Data Analytics',name: 'Data Analytics', selected:false},
      {id:'Robotics',name: 'Robotics', selected:false}];
    if(this != null && this.idea !=  null && this.idea.tags != null && this.idea.tags.length > 0){
      let i=0, j=0;
      for(i=0; i< this.tags.length;i++){

        for(j=0; j<this.idea.tags.length;j++){
           if(this.tags[i].name === this.idea.tags[j]){
             this.tags[i].selected = true;
           }
        }
      }
    }
  }

  setSelected(selectElement) {
    for (var i = 0; i < selectElement.options.length; i++) {
      var optionElement = selectElement.options[i];
      var optionModel = this.tags[i];

      if (optionElement.selected == true) { optionModel.selected = true; }
      else { optionModel.selected = false; }
    }
    var selectedItems = this.tags.filter((item) => { return item.selected === true; });
    if(selectedItems.length > 0){
      this.idea.tags = selectedItems.map((item) => {return item.name});
    }
  }
}
