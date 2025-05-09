import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieCardComponent} from './../../shared/components/movie-card/movie-card.component';
import { Movie } from '../../models/movie';


@Component({
  selector: 'app-wishlist',
  standalone: true,
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  imports: [MovieCardComponent,CommonModule],
})
export class WishlistComponent {
  movie!: Movie;
}
