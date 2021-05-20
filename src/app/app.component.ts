import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wikiResults = [];
  
  constructor(private wikipedia: WikipediaService) { }
  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response: any) => {
      this.wikiResults = response.query.search;
    });
  }
}
