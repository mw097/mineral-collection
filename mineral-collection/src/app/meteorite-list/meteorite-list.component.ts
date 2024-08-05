import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table"
import { METEORITES } from '../constants/constants';

@Component({
  selector: 'app-meteorite-list',
  templateUrl: './meteorite-list.component.html',
  styleUrls: ['./meteorite-list.component.scss']
})
export class MeteoriteListComponent implements OnInit{
  protected displayedColumns: string[] = [];
  protected readonly dataSource = new MatTableDataSource(METEORITES);

  ngOnInit() {
    this.displayedColumns = ['id', 'name', 'mass', 'found', 'country'];
  }
}
