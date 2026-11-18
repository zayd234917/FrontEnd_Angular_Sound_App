import { Injectable } from '@angular/core';
import  { HttpClient, HttpParams } from '@angular/common/http';
import { inject } from '@angular/core';
import { Track } from './track.model';
import { environment } from '../../../../environments/environment.development';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private http = inject(HttpClient);
  getTracks(q? : string) {
    const params = q ? new HttpParams().set('q',q) : undefined;
    return this.http.get<Track[]>(`${environment.apiUrl}/tracks`,{params});
  } 
  getTrack(id: number) { 
    return this.http
    .get<Track[]>(`${environment.apiUrl}/tracks/search`,{params : {id}})
    .pipe(map(list => list[0])); // Assuming the API returns an array, we take the first element

  }
  playTrack(trackId: number) {
    return this.http.post(`${environment.apiUrl}/tracks/play`, { trackId });
  }

}
