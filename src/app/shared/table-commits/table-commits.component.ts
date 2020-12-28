import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-commits',
  templateUrl: './table-commits.component.html',
  styleUrls: ['./table-commits.component.css']
})
export class TableCommitsComponent implements OnInit {

  @Input() commits: any[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
