import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);

  // تسجيل مستخدم جديد
  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // تسجيل الدخول بالبريد وكلمة المرور
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // تسجيل الدخول باستخدام جوجل
  googleLogin() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  // تسجيل الخروج
  logout() {
    return signOut(this.auth);
  }
}