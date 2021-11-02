import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostMetadata} from "../model";
import {filter, map} from "rxjs/operators";

@Injectable()
export class PostsService {

  posts$: Observable<Array<PostMetadata>>;

  constructor(private readonly httpClient: HttpClient) {
    this.setPosts();
  }

  setPosts(): void {
    this.posts$ = this.httpClient.get<Array<PostMetadata>>('/assets/posts/posts.json').pipe(
      map(item => {
          return item.sort((a, b) => (a.createdDate as number) - (b.createdDate as number))
      })
    )
  }

  async getPostMetadata(route: string): Promise<PostMetadata | undefined> {
     const posts = await this.posts$.toPromise();
     return posts.find((item) => item.route.toLowerCase() === route.toLowerCase());
  }

}
