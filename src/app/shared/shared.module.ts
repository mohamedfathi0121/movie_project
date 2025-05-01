import { MovieListComponent } from './components/movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MoviesComponent } from '../components/movies/movies.component';

@NgModule({
  declarations: [],
  imports: [MovieCardComponent,MovieListComponent],
  exports: [MovieCardComponent,MovieListComponent]
})
export class SharedModule {}