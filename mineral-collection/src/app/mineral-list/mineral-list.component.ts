import { Component } from '@angular/core';
import { MINERALS } from '../constants/constants';

@Component({
  selector: 'app-mineral-list',
  templateUrl: './mineral-list.component.html',
  styleUrls: ['./mineral-list.component.scss']
})
export class MineralListComponent {
  readonly MINERALS = MINERALS;
}
