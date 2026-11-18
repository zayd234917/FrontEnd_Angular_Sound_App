import { Component, signal } from '@angular/core';
import { TrackService } from '../../data/track/track.service';
import { inject } from '@angular/core';
import { TrackCard } from '../../components/track-card/track-card';
import { toSignal ,toObservable} from '@angular/core/rxjs-interop';
import { catchError, debounceTime, of, switchMap ,tap} from 'rxjs';
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
    debounceTime(300),
    switchMap((query) => this.trackService.getTracks(query).pipe(catchError(()=> of([] as Track[])))),
  ) ,
    { initialValue: [] as Track[] },
 );
 playTrack(track: Track) {
 return  this.trackService.playTrack(track.id);
}
}
