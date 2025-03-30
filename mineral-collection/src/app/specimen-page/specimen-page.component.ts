import { Component, OnInit, DestroyRef, inject, signal } from '@angular/core';
import { Location } from "@angular/common";
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MeteoriteService } from '../services/meteorite.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MeteoriteData } from '../constants/types';

@Component({
    selector: 'app-specimen-page',
    templateUrl: './specimen-page.component.html',
    styleUrls: ['./specimen-page.component.scss'],
    standalone: false
})
export class SpecimenPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly snackBar = inject(MatSnackBar);
  private readonly meteoriteService = inject(MeteoriteService);
  private readonly location = inject(Location);
  private readonly destroyRef = inject(DestroyRef);
  private specimenId?: string;
  protected specimen = signal<MeteoriteData|null>(null);

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.specimenId = params.get('specimenId') || '';
      this.getSpecimenData(this.specimenId);
    });
  }

  getSpecimenData(specimenId: string) {
    if (this.specimenId !== '') {
      this.meteoriteService.getMeteorite(specimenId)
        .pipe(
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe((meteorite: MeteoriteData|null) => {
          if (meteorite) {
            this.specimen.set(meteorite);
          } else {
            this.openSnackBar('Specimen not found.');
          }
        });
    } else {
        this.openSnackBar('Specimen not found.');
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message);
  }

  goToPreviousPage() {
    this.location.back();
  }
}
