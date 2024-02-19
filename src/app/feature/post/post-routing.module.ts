import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostReadComponent } from './pages/post-read/post-read.component';
import { PostInfoComponent } from './pages/post-info/post-info.component';

const routes: Routes = [
  { path: "post", component: PostReadComponent },
  { path: "post-info", component: PostInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
