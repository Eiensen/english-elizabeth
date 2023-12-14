import { Injectable } from '@angular/core';
import { get, getDatabase, push, ref } from 'firebase/database';
import { DbCard } from '../models/dbCard';
import { child } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor() {}

  push(student: string, level: string, cards: DbCard[], time: Date) {
    const db = getDatabase();
    push(ref(db, 'students/' + student), {
      level: level,
      test: cards,
      time: time.toString(),
    })
      .then(() => {
        console.log('save student data successfull');
      })
      .catch((error) => {
        console.log(error);
      });           
  }
  get(){
    const dbRef = ref(getDatabase());
      get(child(dbRef, 'students')).then( (snapshot) => {
        console.log(snapshot.val());
        
      }) 
  }
}
