import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Movie } from '../../models/movie';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  randomNumber: number = 0;
  isLoading: boolean = true;

  movie: Movie | null = null;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovieById(movieId).subscribe({
      next: (movieData) => {
        this.movie = movieData;
        console.log(this.movie);
        this.isLoading = false;
      },
      error: (err) => {
        this.movie = null;
        this.isLoading = false;
      },
    });
    this.generateRandomNumber();
  }
  generateRandomNumber(): void {
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
  }
}
