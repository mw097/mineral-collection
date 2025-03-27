import { Component, OnDestroy, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MeteoriteService } from '../services/meteorite.service';
import { Subject, takeUntil } from 'rxjs';
import { SpecimenData } from '../types/types';

@Component({
  selector: 'app-specimen-page',
  templateUrl: './specimen-page.component.html',
  styleUrls: ['./specimen-page.component.scss']
})
export class SpecimenPageComponent implements OnInit, OnDestroy {
  private readonly destroyed$ = new Subject<void>();
  private specimenId?: string;
  
  specimen?: SpecimenData;

  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private meteoriteService: MeteoriteService,
    private location: Location,
  ) {}

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
          takeUntil(this.destroyed$)
        )
        .subscribe((meteorite: SpecimenData|null) => {
          if (meteorite) {
            this.specimen = meteorite;
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

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
