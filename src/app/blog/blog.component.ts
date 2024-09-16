import { Component } from '@angular/core';
import { BlogService} from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts: any[] = [];
  post: any;
  featuredPost: any; 
  categories: string[] = [];

  constructor(private blogService: BlogService,private route: ActivatedRoute,private titleService: Title, private metaService: Meta) { }
  generateSlug(title: string): string {
    return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  }
  ngOnInit(): void {
    this.blogService.getPosts().subscribe((data: any[]) => {
      if (data.length > 0) {
        // Set the featured post
        this.featuredPost = data[0];
        this.featuredPost.slug = this.generateSlug(this.featuredPost.title.rendered);
  
        // Fetch the featured image for the featured post
        if (this.featuredPost.featured_media) {
          this.blogService.getMediaById(this.featuredPost.featured_media).subscribe(media => {
            this.featuredPost.featured_image_url = media.source_url;
            console.log(this.featuredPost.featured_image_url);
          });
        }
  
        // Map other posts and fetch their featured media
        this.posts = data.slice(1).map(post => {
          post.slug = this.generateSlug(post.title.rendered);
  
          // Fetch the media for each post
          if (post.featured_media) {
            this.blogService.getMediaById(post.featured_media).subscribe(media => {
              post.featured_image_url = media.source_url;
            });
          }
  
          return post;
        });
      }
    });
  }
  
}


