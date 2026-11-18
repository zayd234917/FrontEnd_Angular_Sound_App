import { Component, numberAttribute } from '@angular/core';
import { TrackService } from '../../data/track/track.service';
import { inject } from '@angular/core';
import { input } from '@angular/core';
import { switchMap ,tap} from 'rxjs';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { ChangeDetectionStrategy } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Track } from '../../data/track/track.model';
import {Router} from '@angular/router';
@Component({
  selector: 'app-track-detail-page',
  imports: [JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './track-detail-page.html',
  styleUrl: './track-detail-page.css',
})
export class TrackDetailPage {
  private service = inject(TrackService);
  private route = inject(Router);
  id = input.required({transform: numberAttribute});
  track = toSignal(
    toObservable(this.id).pipe(
      switchMap((id) => this.service.getTrack(id)),
      tap((track) => console.log('Fetched track:', track)),
    ),
    { initialValue: null },
  );
  playTrack(track: Track) {
    this.route.navigate(['/play', track.id]);
    return this.service.playTrack(track.id);
  }
}
