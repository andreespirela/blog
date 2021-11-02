import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {PostMetadata} from "../model";
import {PostsService} from "../services/posts.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'ap-post',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {

  metadata: PostMetadata;

  constructor(private route:ActivatedRoute,
              private router: Router,
              private readonly postsService: PostsService,
              private readonly titleService: Title) {
  }

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
        const metadata = await this.postsService.getPostMetadata(params['title']);
        if(metadata) {
          this.metadata = metadata;
          this.titleService.setTitle(`Andres Pirela - ${this.metadata.title}`)
        } else {
          this.router.navigate(['/']);
        }
      }
    );
  }

  get markdownUrl(): string {
    return `/assets/posts/${this.metadata.route}/blog.md`;
  }

}
