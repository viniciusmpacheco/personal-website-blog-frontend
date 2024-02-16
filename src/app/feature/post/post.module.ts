import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostReadComponent } from './pages/post-read/post-read.component';
import { PostReferenceComponent } from './components/post-read/post-reference/post-reference.component';
import { PostCommentComponent } from './components/post-read/post-comment/post-comment.component';
import { PostBodyComponent } from './components/post-read/post-body/post-body.component';
import { PostHeaderComponent } from './components/post-read/post-header/post-header.component';
import { PostAuthorCardComponent } from './components/post-read/post-author-card/post-author-card.component';
import { PostAdvertisementComponent } from './components/post-read/post-advertisement/post-advertisement.component';
import { PostLoginFormComponent } from './components/post-read/post-login-form/post-login-form.component';
import { PostLoginOthersComponent } from './components/post-read/post-login-others/post-login-others.component';


@NgModule({
  declarations: [
    PostReadComponent,
    PostReferenceComponent,
    PostCommentComponent,
    PostBodyComponent,
    PostHeaderComponent,
    PostAuthorCardComponent,
    PostAdvertisementComponent,
    PostLoginFormComponent,
    PostLoginOthersComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
