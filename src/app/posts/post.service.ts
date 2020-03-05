import { Post } from './post.model'
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];

  getPosts(){
    return [...this.posts];
  }

  addPost(content: string){
    const post: Post = {content: content};
    this.posts.push(post);
  }
}
