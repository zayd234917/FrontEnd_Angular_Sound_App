import { Routes } from '@angular/router';
import { TrackListPage } from './pages/track-list-page/track-list-page';
import { TrackDetailPage } from './pages/track-detail-page/track-detail-page';   
export const TRACKS_ROUTES: Routes = [
  { path: '', component: TrackListPage },
  { path: ':id', component: TrackDetailPage },
//   {path : 'play/:id', component: TrackDetailPage},
];