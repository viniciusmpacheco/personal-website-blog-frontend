import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-reference',
  templateUrl: './post-reference.component.html',
  styleUrls: ['./post-reference.component.scss']
})
export class PostReferenceComponent {
  @Input() references: any[] = []
}
