import { Component, input } from '@angular/core';

@Component({
  selector: 'app-decoration',
  imports: [],
  templateUrl: './decoration.component.html',
  styleUrl: './decoration.component.scss',
})
export class DecorationComponent {
  readonly height = input(63);
  readonly rotation = input(0);
}
