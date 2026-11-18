export interface Album {
  id: number;
  title: string;
  realeaseYear: number;   // matches the backend's spelling
  owner_name: string;
}
export interface Track {
  id: number;
  title: string;
  release_date: string;
  owner_name : string;
  album: Album | null;
  artists: string[];
}