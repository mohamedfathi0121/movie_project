import { RedirectCommand, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ConfigComponent } from './config/config.component';
import { ProfileComponent } from './profile/profile.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { path: 'config', component: ConfigComponent },
    {path:'' ,redirectTo:'/home',pathMatch:'full'},
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    {path:"**" , component: NotFoundComponent},





];



