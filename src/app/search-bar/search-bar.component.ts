import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() query = new EventEmitter<string>();
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
    this.query.emit(this.term);
  }

}
