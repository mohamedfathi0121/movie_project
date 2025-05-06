import { CommonModule } from '@angular/common';
import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],


  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isVisible = true;
}
