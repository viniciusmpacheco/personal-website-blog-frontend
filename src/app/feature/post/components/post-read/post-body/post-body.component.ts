import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.scss']
})
export class PostBodyComponent {
  @Input() public body: string = ""
}
