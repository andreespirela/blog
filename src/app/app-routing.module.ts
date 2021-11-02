import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {BlogComponent} from "./blog/blog.component";

const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: 'blog/:title',
    component: PostsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
