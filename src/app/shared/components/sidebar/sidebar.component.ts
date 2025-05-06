import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,RouterLink,RouterLinkActive],

  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() isVisible = true;
selectedSection: number = 1;
  section: ISection[] = [
    {icon: '🏠 ', name: 'Home', id: 1 ,href:"/home"},
    { icon: '🎥 ', name: 'Now Playing', id: 2, href: '/movies', param: 'now_playing' },
    { icon: '🔥 ', name: 'Popular', id: 3, href: '/movies',param: 'popular' },
    { icon: '⭐ ', name: 'Top Rated', id: 4, href: '/movies',param: 'top_rated' },
    { icon: '📡 ', name: 'Upcoming', id: 5, href: '/movies',param: 'upcoming' },
  ];
  navigate(id: number) {
this.selectedSection= id
  }
}
interface ISection {
  icon:string
  name: string;
  id: number;
  href: string;
  param?: string
}

