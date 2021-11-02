import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {PostMetadata} from "../model";
import {PostsService} from "../services/posts.service";

@Component({
  selector: 'ap-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {

  posts$: Observable<Array<PostMetadata>>;

  constructor(private readonly postsService: PostsService) {
  }

  ngOnInit() {
    this.posts$ = this.postsService.posts$;
  }
}
