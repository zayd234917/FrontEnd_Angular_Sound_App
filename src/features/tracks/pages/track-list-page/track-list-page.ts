import { Component, signal } from '@angular/core';
import { TrackService } from '../../data/track/track.service';
import { inject } from '@angular/core';
import { TrackCard } from '../../components/track-card/track-card';
import { toSignal ,toObservable} from '@angular/core/rxjs-interop';
import { catchError, of, switchMap ,tap} from 'rxjs';
import {Track} from '../../data/track/track.model';

@Component({
  selector: 'app-track-list-page',
  imports: [TrackCard],
  templateUrl: './track-list-page.html',
  styleUrl: './track-list-page.css',
})
export class TrackListPage {
 private trackService = inject(TrackService);
 query = signal('');
 tracks = toSignal(
  toObservable(this.query).pipe(
    switchMap((query) => this.trackService.getTracks(query).pipe(catchError(()=> of([] as Track[])))),
  ) ,
    { initialValue: [] as Track[] },
 );
 playTrack(track: Track) {
  // Handle the play event here, e.g., call a service to play the track
 }
}
