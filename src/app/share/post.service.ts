import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './class/post';


const headers = new HttpHeaders({
  'content-type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(this.url);
  }

  savePost(post: Post) {
    this.http.post(this.url, post, { headers } );
  }

  DeletePost(id: number) {
    this.http.delete(this.url + '/' + id );
  }

}
