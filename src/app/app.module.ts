import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IdeaService } from "./ideas/idea.service";
import {IdeaListComponent} from "./ideas/ideaList.component";
import {IdeaListResolver} from "./ideas/ideaList-resolver.service";
import {HomeComponent} from "./home/home.component";
import {HomeModule} from "./home/home.module";
import {IdeaComponent} from "./ideas/idea.component";
import {IdeaResolver} from "./ideas/idea-resolver.service";
import { CreateIdeaComponent } from './ideas/create-idea.component';
import {IdeaEditComponent} from "./ideas/idea-edit.component";
import { ConfirmIdeaComponent } from './ideas/confirm-idea.component';
import { ViewIdeaComponent } from './ideas/view-idea.component';
import { ModifyIdeaComponent } from './ideas/modify-idea.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/ideas', pathMatch: 'full'},
  {
    path: 'ideas', component: IdeaListComponent,
    resolve: {
      ideas: IdeaListResolver
    }
  },
  {     path: 'idea/view/:id', component: IdeaComponent,
        resolve: {
          idea: IdeaResolver
        }

  },
  {     path: 'idea/create', component: CreateIdeaComponent

  },
  {     path: 'idea/modify/:id', component: ModifyIdeaComponent,
    resolve: {
      idea: IdeaResolver
    }

  },
  {     path: 'idea/confirm', component: ConfirmIdeaComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    IdeaListComponent,
    IdeaComponent,
    CreateIdeaComponent,
    IdeaEditComponent,
    ConfirmIdeaComponent,
    ViewIdeaComponent,
    ModifyIdeaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    HomeModule
  ],
  providers: [IdeaService, IdeaResolver, IdeaListResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
