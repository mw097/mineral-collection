import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { MeteoriteData } from '../constants/types';

@Injectable({
  providedIn: 'root'
})
export class MeteoriteService {
  private readonly firestore = inject(Firestore);
  private readonly meteorites$ = new Observable<MeteoriteData[]>();

  constructor() {
    const meteoritesCollection = collection(this.firestore, 'meteorites');
    this.meteorites$ = collectionData(meteoritesCollection, { idField: 'id' }) as Observable<MeteoriteData[]>;
  }

  /**
   * Get the meteorites from the Firestore collection.
   * @returns Observable of meteorites.
   */
  getMeteorites(): Observable<MeteoriteData[]> {
    return this.meteorites$;
  }

  /**
   * Returns a meteorite by its id.
   * @param id The id of the meteorite to get.
   * @returns 
   */
  getMeteorite(id: string): Observable<MeteoriteData | null> {
    return this.meteorites$.pipe(
      map(meteorites => meteorites.find(meteorite => meteorite.id === id) || null)
    );
  }
}
