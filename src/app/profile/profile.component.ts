import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  userData: any = null;
  loading = true;

  constructor(private authService: AuthService, private auth: Auth) {}

  ngOnInit(): void {
    const currentUser = this.auth.currentUser;
    if (currentUser) {
      this.authService.getUserData(currentUser.uid).then(data => {
        this.userData = data;
        this.loading = false;
      });
    } else {
      this.loading = false;
    }
  }
}
