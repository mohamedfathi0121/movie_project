import { Component } from '@angular/core';
import { MovieListComponent } from '../shared/components/movie-list/movie-list.component';

@Component({
  selector: 'app-home',
  imports: [MovieListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
