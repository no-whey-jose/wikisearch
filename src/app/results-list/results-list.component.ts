import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  @Input() wikiResults: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
