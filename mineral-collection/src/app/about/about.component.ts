import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DecorationComponent } from '../shared/decoration/decoration.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DecorationComponent],
})
export class AboutComponent {}
