import { MovieCardComponent } from '../movie-card/movie-card.component';
import { SharedModule } from './../../shared.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  imports: [SharedModule, MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

}
