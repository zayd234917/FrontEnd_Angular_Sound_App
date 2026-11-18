import { Component } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { inject } from '@angular/core';
import { TrackListPage } from '../tracks/pages/track-list-page/track-list-page';
@Component({
  selector: 'app-home',
  imports: [TrackListPage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private authService = inject(AuthService);
  logout() {
    this.authService.logout();
  }
}
