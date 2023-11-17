
export type Song = {
  id: string;
  title: string;
  lyrics: Lyric[];
}

export type Lyric = {
  id: string;
  content: string;
  likes: number;
}
