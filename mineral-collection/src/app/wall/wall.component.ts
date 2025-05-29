import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import  {MatSidenavModule } from '@angular/material/sidenav';
import { ContentCardComponent } from '../shared/content-card/content-card.component';

@Component({
  selector: 'app-wall',
  imports: [
    MatCardModule,
    MatSidenavModule,
    ContentCardComponent,
  ],
  templateUrl: './wall.component.html',
  styleUrl: './wall.component.scss'
})
export class WallComponent {

}
