
import { RedirectCommand, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ConfigComponent } from './config/config.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { MoviesCategoriesComponent } from './components/movies-categories/movies-categories.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './services/login/login.component';
import { RegisterComponent } from './services/register/register.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify-email', component: VerifyEmailComponent },

];


import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from '../firebase.config';
import { VerifyEmailComponent } from './services/register/verifyemail';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'movies/:id', component: MoviesCategoriesComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '**', component: NotFoundComponent },
];