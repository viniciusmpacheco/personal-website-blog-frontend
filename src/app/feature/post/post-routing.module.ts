import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostReadComponent } from './pages/post-read/post-read.component';

const routes: Routes = [
  { path: "post", component: PostReadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
