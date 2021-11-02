import {Injectable} from "@angular/core";
import {Meta} from "@angular/platform-browser";

@Injectable()
export class SeoService {

  constructor(private readonly meta: Meta) {
  }

  initializeBasics(): void {
    const description = 'Andres Pirela - Thoughts & Statements About Technology.';
    const image = '/assets/andres-pirela.jpg';
    const title = 'Andres Pirela';

    this.meta.addTags([
        {
          name: 'description',
          content: description
        },
        {
          name: 'image',
          content: image
        },
        {
          name: 'title',
          content: title,
        },
        {
          name: 'robots',
          content: 'index, follow'
        },
        {
          itemprop: 'name',
          content: title
        },
        {
          itemprop: 'description',
          content: description
        },
        {
          itemprop: 'image',
          content: image
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: description
        },
        {
          name: 'twitter:creator',
          content: '@andreestech'
        },
        {
          name: 'twitter:image',
          content: image
        },
        {
          name: 'og:title',
          content: title
        },
        {
          name: 'og:description',
          content: description
        },
        {
          name: 'og:image',
          content: image
        },
        {
          name: 'og:site_name',
          content: title
        },
        {
          name: 'og:type',
          content: 'website'
        }
      ]);
  }

  updateTitleAndDescription(title: string, description: string): void {
    const titleTags = ['title', 'og:title', 'twitter:title'];
    const descriptionTags = ['description', 'twitter:description', 'og:description'];
    titleTags.forEach((tag) => this.meta.updateTag({
      name: tag,
      content: title
    }));
    descriptionTags.forEach((tag) => this.meta.updateTag({
      name: tag,
      content: description
    }));
  }

}
