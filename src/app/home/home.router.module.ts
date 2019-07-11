
import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PostsComponent } from './posts/posts.component';
import { TodoComponent } from './todo/todo.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',  component: HomeComponent,
    children: [
      {
        path: '', component: DashboardComponent
      },
      {
        path: 'blog', component: PostsComponent
      },
      {
        path: 'todo', component: TodoComponent
      }
    ]
  }
];

export const HomeRoutes = RouterModule.forChild(routes);

