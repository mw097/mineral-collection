import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatDrawerContainer, MatDrawer, MatDrawerContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-wall',
  imports: [MatCard, MatDrawerContainer, MatDrawer, MatDrawerContent],
  templateUrl: './wall.component.html',
  styleUrl: './wall.component.scss'
})
export class WallComponent {

}
