import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  onInput(event: any) {
    if (event.target.value) {
      this.term = event.target.value;
    }
  }

  onSubmit(event: any) {
    event.preventDefault();
    console.log(this.term);
  }

}
