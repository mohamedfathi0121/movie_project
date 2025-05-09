import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';
import { ProfileService } from '../../services/profile.service';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, 
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('fadeInImage', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class ProfileComponent implements OnInit {
  userName: string = '';
  userEmail: string = '';
  userUid: string = '';
  isLoading: boolean = true;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getUserProfile().subscribe((user: any) => {
      if (user) {
        this.userName = user.name;
        this.userEmail = user.email;
        this.userUid = user.uid;
      } else {
        this.userName = 'Guest';
        this.userEmail = 'guest@example.com';
      }
      this.isLoading = false;
    });
  }
}
