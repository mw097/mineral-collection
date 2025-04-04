import { Component, input } from '@angular/core';
import { MineralData } from 'src/app/constants/types';

@Component({
  selector: 'app-mineral-label',
  imports: [],
  templateUrl: './mineral-label.component.html',
  styleUrl: './mineral-label.component.scss'
})
export class MineralLabelComponent {
  readonly mineralData = input.required<MineralData>();
}
