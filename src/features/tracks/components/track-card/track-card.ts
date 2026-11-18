import { Component } from '@angular/core';
import {Track} from '../../data/track/track.model';
import { AuthService } from '../../../../core/auth.service';
import { inject } from '@angular/core';
import { input ,output} from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-track-card',
  imports: [RouterLink],
  templateUrl: './track-card.html',
  styleUrl: './track-card.css',
})
export class TrackCard  {
  track = input.required<Track>();
  play = output<Track>();
}
