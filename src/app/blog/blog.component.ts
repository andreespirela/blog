import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {PostMetadata} from "../model";
import {PostsService} from "../services/posts.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'ap-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {

  posts$: Observable<Array<PostMetadata>>;

  constructor(private readonly postsService: PostsService,
              private readonly titleService: Title) {
    this.titleService.setTitle('Andres Pirela - Blog');
  }

  ngOnInit() {
    this.posts$ = this.postsService.posts$;
  }
}
