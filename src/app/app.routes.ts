import { Routes } from '@angular/router';



import { NotFoundComponent } from './not-found/not-found.component';
//import { ConfigComponent } from './config/config.component'; 


export const routes: Routes = [
    //{ path: 'config', component: ConfigComponent },
 
  { path: '**', component: NotFoundComponent },
  

];