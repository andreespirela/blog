import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PostsService} from "./services/posts.service";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {PostsComponent} from "./posts/posts.component";
import {BlogComponent} from "./blog/blog.component";
import {MarkdownModule} from "ngx-markdown";
import {SeoService} from "./services/seo.service";

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    PostsService,
    SeoService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
