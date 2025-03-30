import { inject, Injectable } from '@angular/core';
import { Firestore, collection, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MeteoriteData, MineralData } from '../constants/types';


@Injectable({
  providedIn: 'root'
})
export class MineralService {
  private readonly firestore = inject(Firestore);
  private readonly minerals$ = new Observable<MineralData[]>();

  constructor() {
    const mineralsCollection = collection(this.firestore, 'minerals');
    this.minerals$ = collectionData(mineralsCollection, { idField: 'id' }) as Observable<MineralData[]>;
  }

  /**
   * Get the minerals from the Firestore collection.
   * @returns Observable of minerals.
   */
  getMinerals(): Observable<MineralData[]> {
    return this.minerals$;
  }
}
