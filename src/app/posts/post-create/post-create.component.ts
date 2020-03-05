import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../post.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  enteredValue = "";
 constructor(public postsService: PostsService){}

  onAddPost(form: NgForm){
    if(form.invalid)
    return;

    this.postsService.addPost(form.value.content);
  }
}
