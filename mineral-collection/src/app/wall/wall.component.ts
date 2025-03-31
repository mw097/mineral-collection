import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import  {MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-wall',
  imports: [
    MatCardModule,
    MatSidenavModule,
  ],
  templateUrl: './wall.component.html',
  styleUrl: './wall.component.scss'
})
export class WallComponent {

}
