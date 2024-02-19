import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.scss'],
  providers: [ PostService ]
})
export class PostInfoComponent {
  public post: any
  constructor(private postService: PostService){}
  async ngOnInit(){
    this.post = await this.postService.read()
    .then(result => result)
    .catch(error => error)
    console.log(this.post.references)
  }
}
