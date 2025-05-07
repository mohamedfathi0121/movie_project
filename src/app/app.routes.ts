import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { MoviesCategoriesComponent } from './components/movies-categories/movies-categories.component';
import { DetailsComponent } from './components/details/details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
{path: '', redirectTo: '/movies', pathMatch: 'full' },
{path: 'movies', component: MoviesComponent,
  children :[
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'movies-categories/:id', component: MoviesCategoriesComponent },
  { path: 'details/:id', component: DetailsComponent },
  ]
 },
 {path:'test',component:TestComponent},
  { path: '**', component: NotFoundComponent },

];
