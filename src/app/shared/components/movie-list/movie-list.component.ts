import { SharedModule } from './../../shared.module';
import { Component } from '@angular/core';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../../models/movie';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  imports: [SharedModule, MovieCardComponent,NgForOf],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  constructor(private movieService: MovieService) {}
  movies: Movie[] = [];
  ngOnInit() {
    this.movieService.getMoviesByCategory('popular', 6).subscribe((movies) => {
      this.movies = movies;
    });
  }
}
