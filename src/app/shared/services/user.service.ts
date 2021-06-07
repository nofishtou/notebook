import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,) {}

    SignIn(email, password) {
      return from(this.afAuth.signInWithEmailAndPassword(email, password));
    }

    SignUp(email, password) {
      console.log('a')
      return from(this.afAuth.createUserWithEmailAndPassword(email, password));
    }

    SignOut() {
      return from(this.afAuth.signOut());
    }
}
