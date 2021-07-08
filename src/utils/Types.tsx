export interface DropdownProps {
  dropTerm: string;
  setDropTerm(dropTerm: string): void;
  episodes: IEpisode[];
}

export interface epSearchProp {
  episodes: IEpisode[];
  searchTerm: string;
}

export interface EpisodesProp {
  searchTerm: string;
  dropTerm: string;
  episodes: IEpisode[];
}
export interface IEpisode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  _links: { self: { href: string } };
}

export interface SearchBarProps {
  searchTerm: string;
  setSearchTerm(searchTerm: string): void;
  episodes: IEpisode[];
}

export interface ShowProps {
  show: number;
  setShow(show: number): void;
}
