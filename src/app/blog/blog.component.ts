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
        this.featuredPost = data[0];
        console.log("Featured Datas",this.featuredPost)
        this.featuredPost.slug = this.generateSlug(this.featuredPost.title.rendered);
        this.posts = data.slice(1).map(post => {
          post.slug = this.generateSlug(post.title.rendered);
          return post;
        });
      }
    });
    
  }
}


