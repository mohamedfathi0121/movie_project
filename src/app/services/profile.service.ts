import { inject, Injectable } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { from, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(
    private auth: Auth,
    private firestore: Firestore
  ) {}

  getUserProfile() {
    return user(this.auth).pipe(
      switchMap((authUser) => {
        if (!authUser) return of(null);

        const uid = authUser.uid;
        const email = authUser.email || 'no-email@example.com';

        const userDocRef = doc(this.firestore, 'users', uid);
        return from(getDoc(userDocRef)).pipe(
          map((snapshot) => {
            const data = snapshot.data();
            return {
              uid,
              email,
              name: data ? data['name'] : authUser.displayName || 'User'
            };
          })
        );
      })
    );
  }
}
