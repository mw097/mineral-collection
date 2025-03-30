import { Component, inject } from '@angular/core';
import { MineralService } from '../services/mineral.service';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-mineral-list',
    templateUrl: './mineral-list.component.html',
    styleUrls: ['./mineral-list.component.scss'],
    standalone: false
})
export class MineralListComponent {
  private readonly mineralService = inject(MineralService);
  protected readonly minerals = toSignal(
    this.mineralService.getMinerals(), {initialValue: []}
  );
}
