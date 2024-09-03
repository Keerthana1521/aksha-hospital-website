import { Component } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aksha-hospital';
  constructor(private router: Router){}
  ngOnInit(){
    this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
  
}
