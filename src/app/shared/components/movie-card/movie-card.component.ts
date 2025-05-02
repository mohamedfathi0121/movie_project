
import { Component, Input } from '@angular/core';
import { Movie } from '../../../models/movie';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {

  @Input() movie!: Movie;

}
