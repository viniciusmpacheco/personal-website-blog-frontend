import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.scss']
})
export class PostHeaderComponent {
  @Input() public title: string = ""
  @Input() public subtitle: string = ""
  @Input() public created_at: string = ""
  @Input() public author: string = ""
  @Input() public keywords: string[] = []
  @Input() public description: string = ""
}
