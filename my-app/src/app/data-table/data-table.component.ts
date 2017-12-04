import { Component, OnInit } from '@angular/core';

import { Data } from '../data';
import { DATA } from '../mock-data';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  data = DATA;

  constructor() { }

  ngOnInit() {
  }

}
