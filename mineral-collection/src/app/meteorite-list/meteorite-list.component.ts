import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table"
import { MeteoriteService } from '../services/meteorite.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-meteorite-list',
    templateUrl: './meteorite-list.component.html',
    styleUrls: ['./meteorite-list.component.scss'],
    standalone: false
})
export class MeteoriteListComponent implements OnInit{
  private readonly meteoriteService = inject(MeteoriteService);
  protected readonly meteorites = toSignal(
    this.meteoriteService.getMeteorites(), {initialValue: []}
  );
  protected displayedColumns: string[] = [];
  protected readonly dataSource = new MatTableDataSource(this.meteorites());

  ngOnInit() {
    this.displayedColumns = ['id', 'name', 'mass', 'found', 'country', 'description'];
  }
}
