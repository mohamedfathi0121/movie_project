import { SharedModule } from './../../shared.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  imports: [SharedModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

}
