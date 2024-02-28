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
import { PostInfoComponent } from './pages/post-info/post-info.component';
import { PostAbstractComponent } from './components/post-info/post-abstract/post-abstract.component';
import { PostAuthorsResumeComponent } from './components/post-info/post-authors-resume/post-authors-resume.component';
import { PostReferencesComponent } from './components/post-info/post-references/post-references.component';
import { PostRelatedsComponent } from './components/post-info/post-relateds/post-relateds.component';
import { PostInformationComponent } from './components/post-info/post-information/post-information.component';
import { PostFilesComponent } from './components/post-info/post-files/post-files.component';
import { PostPathComponent } from './components/post-info/post-path/post-path.component';
import { PostInfoHeaderComponent } from './components/post-info/post-info-header/post-info-header.component';




@NgModule({
  declarations: [
    PostReadComponent,
    PostReferenceComponent,
    PostCommentComponent,
    PostBodyComponent,
    PostHeaderComponent,
    PostInfoHeaderComponent,
    PostAuthorCardComponent,
    PostAdvertisementComponent,
    PostLoginFormComponent,
    PostLoginOthersComponent,
    PostInfoComponent,
    PostAbstractComponent,
    PostAuthorsResumeComponent,
    PostReferencesComponent,
    PostRelatedsComponent,
    PostInformationComponent,
    PostFilesComponent,
    PostPathComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
