import { Component, input, signal } from '@angular/core';
import { MineralData } from 'src/app/constants/types';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
} from '@angular/animations';

@Component({
  selector: 'app-mineral-label',
  imports: [CommonModule],
  templateUrl: './mineral-label.component.html',
  styleUrl: './mineral-label.component.scss',
  animations: [
    trigger('hoverAnimation', [
      state('default', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.05)' })),
      transition('default => hovered', [
        group([animate('200ms ease-out', style({ transform: 'scale(1.05)' }))]),
      ]),
      transition('hovered => default', [
        group([animate('200ms ease-in', style({ transform: 'scale(1)' }))]),
      ]),
    ]),
  ],
})
export class MineralLabelComponent {
  readonly mineralData = input.required<MineralData>();
  readonly isHovered = signal(false);

  /**
   * Toggles the visibility of the mineral details.
   */
  setHover(shouldDisplay: boolean) {
    this.isHovered.set(shouldDisplay);
  }
}
