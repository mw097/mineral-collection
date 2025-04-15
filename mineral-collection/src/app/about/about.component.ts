import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ContentCardComponent } from "../shared/content-card/content-card.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ContentCardComponent],
})
export class AboutComponent {
  
}
