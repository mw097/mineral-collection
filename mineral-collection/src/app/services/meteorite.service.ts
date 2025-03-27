//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { METEORITES } from '../constants/constants';
import { Observable, of } from 'rxjs';
import { SpecimenData } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class MeteoriteService {

  constructor(/*private http: HttpClient*/) { }

  //TODO(mw097): Add the API calls.
  //getMeteoriteList() {}

  getMeteorite(specimenId: string): Observable<SpecimenData|null> {
    //TODO(mw097): Add the API calls.
    const meteorite = METEORITES.find(meteorite => meteorite.id === specimenId);
    return of(meteorite || null);
  }
}
