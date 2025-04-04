import { Component, inject, Signal } from '@angular/core';
import { MineralService } from '../services/mineral.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MineralData } from '../constants/types';
import { MatCardModule } from '@angular/material/card';
import { MineralLabelComponent } from '../shared/mineral-label/mineral-label.component';

@Component({
    selector: 'app-mineral-list',
    templateUrl: './mineral-list.component.html',
    styleUrls: ['./mineral-list.component.scss'],
    standalone: true,
    imports: [
      CommonModule, 
      MatCardModule,
      MineralLabelComponent,
    ],
})
export class MineralListComponent {
  private readonly mineralService = inject(MineralService);
  protected readonly minerals: Signal<MineralData[]> = toSignal(
    this.mineralService.getMinerals(), {initialValue: []}
  );
}
