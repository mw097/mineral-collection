import { Component, inject, Signal } from '@angular/core';
import { MineralService } from '../services/mineral.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MineralData } from '../constants/types';
import { MineralLabelComponent } from '../shared/mineral-label/mineral-label.component';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-mineral-list',
  templateUrl: './mineral-list.component.html',
  styleUrls: ['./mineral-list.component.scss'],
  standalone: true,
  imports: [CommonModule, MineralLabelComponent],
})
export class MineralListComponent {
  private readonly mineralService = inject(MineralService);
  protected readonly minerals: Signal<MineralData[]> = toSignal(
    this.mineralService
      .getMinerals()
      .pipe(
        map((list) =>
          list.sort((a: MineralData, b: MineralData) =>
            a.id.localeCompare(b.id, undefined, { numeric: true })
          )
        )
      ),
    { initialValue: [] }
  );
}
