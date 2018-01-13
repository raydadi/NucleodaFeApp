import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AcampantesProvider {

  constructor(private db: AngularFireDatabase) {

  }

  getAcampantes(start, end): FirebaseListObservable<any> {
    return this.db.list('/acampamento-jovens/acampantes', {
      query: {
        orderByChild: 'nome',
        limitToFirst: 10,
        startAt: start,
        endAt: end
      }
    });
  }
}
