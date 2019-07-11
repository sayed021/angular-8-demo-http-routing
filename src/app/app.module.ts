import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CommentService } from './share/comment.service';
import { PostService } from './share/post.service';
import { TodoService } from './share/todo.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { AppRouterModule } from './share/router.module';
import { AuthGuard } from './share/auth.guard';
import { AuthService } from './share/auth.service';
import { from } from 'rxjs';

import { ToastrModule } from 'ngx-toastr';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule,
    ToastrModule.forRoot()
  ],
  providers: [
    CommentService,
    PostService,
    TodoService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
