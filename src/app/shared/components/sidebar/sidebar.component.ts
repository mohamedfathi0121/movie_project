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
    { name: '🏠 Home', id: 1 ,href:"/home"},
    // { name: '🎬 Movies', id: 2 },
    // { name: '📺 TV Series', id: 3 },
    // { name: '📅 Upcoming', id: 4 },
  ];
  navigate(id: number) {
this.selectedSection= id
  }
}
interface ISection {
  name: string;
  id: number;
  href: string;
}
