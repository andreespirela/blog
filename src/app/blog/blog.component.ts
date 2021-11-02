import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {PostMetadata} from "../model";
import {PostsService} from "../services/posts.service";
import {Title} from "@angular/platform-browser";
import {SeoService} from "../services/seo.service";

@Component({
  selector: 'ap-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {

  posts$: Observable<Array<PostMetadata>>;

  constructor(private readonly postsService: PostsService,
              private readonly titleService: Title,
              private readonly seoService: SeoService) {
    this.titleService.setTitle('Andres Pirela - Blog');
    this.seoService.initializeBasics();
  }

  ngOnInit() {
    this.posts$ = this.postsService.posts$;
  }

  onlyVisiblePosts(post: PostMetadata) {
    return post.visible;
  }
}
