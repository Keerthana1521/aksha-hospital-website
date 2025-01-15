import { Component } from '@angular/core';
import { BlogService} from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {




  posts: any[] = [];
  post: any;
  featuredPost: any; 
  categories: { id: number, name: string }[] = [];

  filteredPosts: any[] = [];

  searchText: string = '';
  selectedCategory: string = '';

  constructor(private blogService: BlogService,private route: ActivatedRoute,private titleService: Title, private metaService: Meta,private sanitizer: DomSanitizer) { }
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
        this.filteredPosts = [...this.posts];
      }
    });
     // Fetch categories
     this.blogService.getCategories().subscribe((categoriesData: any) => {
      this.categories = categoriesData;
      console.log(this.categories);
    });
  }
  filterBlogs() {
    this.filteredPosts = this.posts.filter(post => {
      const matchesCategory = this.selectedCategory ? post.categories.includes(parseInt(this.selectedCategory)) : true;
      const matchesSearch = this.searchText ? post.title.rendered.toLowerCase().includes(this.searchText.toLowerCase()) : true;
      return matchesCategory && matchesSearch;
    });
  }

  stripHtmlTags(content: string): string {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = content;
    return tempElement.textContent || tempElement.innerText || '';
  }
  
}


