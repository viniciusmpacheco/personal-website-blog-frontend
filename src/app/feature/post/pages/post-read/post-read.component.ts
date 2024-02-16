import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'post-read',
  templateUrl: './post-read.component.html',
  styleUrls: ['./post-read.component.scss'],
  providers: [ PostService ]
})
export class PostReadComponent implements OnInit {
  public post: any
  constructor(private postService: PostService){}
  async ngOnInit(){
    this.post = await this.postService.read()
    .then(result => result)
    .catch(error => error)
    console.log(this.post.references)
  }
}
