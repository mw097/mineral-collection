import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from "@angular/material/table"
import { MeteoriteService } from '../services/meteorite.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-meteorite-list',
    templateUrl: './meteorite-list.component.html',
    styleUrls: ['./meteorite-list.component.scss'],
    standalone: true,
    imports: [RouterLink, MatTableModule],
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
