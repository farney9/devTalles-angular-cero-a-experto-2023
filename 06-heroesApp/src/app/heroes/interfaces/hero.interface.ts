// Generated by https://quicktype.io

export interface HeroModel {
  id:               string;
  superhero:        string;
  publisher:        Publisher;
  alter_ego:        string;
  first_appearance: string;
  characters:       string;
  alt_img?:          string;
}

export enum Publisher {
  DCCOMICS = "DC Comics",
  MARVELCOMICS = "Marvel Comics",
}