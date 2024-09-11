import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  post: any;
  categories: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) { }
  ngOnInit(): void {
  const slug = this.route.snapshot.paramMap.get('slug')!;
  this.blogService.getPostBySlug(slug).subscribe(async (data: any) => {
    this.post = data[0];

      // Fetch categories
      const categoryPromises = this.post.categories.map((categoryId: number) =>
        this.blogService.getCategory(categoryId).toPromise()
      );

      const categories = await Promise.all(categoryPromises);
      this.categories = categories.map((category: any) => category.name);
    });
  }
}
