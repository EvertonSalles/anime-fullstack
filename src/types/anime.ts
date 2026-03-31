export default interface Anime {
  mal_id: number;

  title: string;
  title_english: string;
  title_japanese: string;

  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
    };
  };

  trailer: {
    youtube_id: string | null;
    url: string | null;
  };

  synopsis: string;

  score: number;
  rank: number;
  popularity: number;

  episodes: number;
  duration: string;

  status: string;
  rating: string; 

  year: number;
  aired: {
    from: string;
    to: string | null;
  };

  genres: {
    mal_id: number;
    name: string;
  }[];

  studios: {
    mal_id: number;
    name: string;
  }[];

  type: string; // TV, Movie, OVA
}