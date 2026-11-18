export interface Track {
  id: number;
  title: string;
  release_date: string;
  owner_name : string;
  album: {id: number, title: string, release_Year: string,owner_name: string} | null;
  artists: string[];
}