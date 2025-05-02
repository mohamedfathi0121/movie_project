import { MovieListComponent } from './shared/components/movie-list/movie-list.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
