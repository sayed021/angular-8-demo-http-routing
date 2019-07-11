import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/share/post.service';
import { Post } from 'src/app/share/class/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  posts: Post[];
  recentPost: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe(data => this.posts = data.splice(0, 3) );

  }

}
