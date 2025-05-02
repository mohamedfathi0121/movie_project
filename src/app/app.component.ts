import { MovieListComponent } from './shared/components/movie-list/movie-list.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './components/movies/movies.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MoviesComponent,HeaderComponent,SidebarComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
