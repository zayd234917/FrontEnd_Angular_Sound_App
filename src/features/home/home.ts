import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { inject } from '@angular/core';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private authService = inject(AuthService);
  logout() {
    this.authService.logout();
  }
}
