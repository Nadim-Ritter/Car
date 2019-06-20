import { Component, OnInit } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Make', 'Model', 'Year', 'Power', 'Vmax', 'Color', 'AmountSeats'];
  constructor() { }

  ngOnInit() {
  }

}
