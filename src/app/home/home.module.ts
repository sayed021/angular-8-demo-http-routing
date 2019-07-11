import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.router.module';
import { PostsComponent } from './posts/posts.component';
import { TodoComponent } from './todo/todo.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    HomeComponent,
    PostsComponent,
    TodoComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutes
  ]
})
export class HomeModule { }
