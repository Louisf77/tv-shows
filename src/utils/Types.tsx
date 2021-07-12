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

export interface ShowListProps {
  name: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  genres: string[];
  status: string;
  runtime: number | null;
  id: number;
  url: string;
  type: string;
  language: string;
  averageRuntime: number | null;
  premiered: string | null;
  officialSite: string | null;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number | null;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    } | null;
  } | null;
  webChannel: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    } | null;
  } | null;
  dvdCountry: string | null;
  externals: {
    tvrage: number;
    thetvdb: number | null;
    imdb: string | null;
  };

  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode?: {
      href: string | null;
    };
  } | null;
}

export interface ShowSearchBarProps {
  shows: ShowListProps[];
  showSearchTerm: string;
  // setShowSearchTerm(showSearchTerm:string):void
  setShowSearchTerm: (showSearchTerm: string) => void;
}

export interface ShowCountProps {
  shows: ShowListProps[];
  showSearchTerm: string;
}

export interface ShowFilterProps {
  shows: ShowListProps[];
  showSearchTerm: string;
  showDropTerm: string;
}

export interface ShowDropDownProps {
  shows: ShowListProps[];
  showDropTerm: string;
  setShowDropTerm(showDropTerm: string): void;
}

export interface FullContentEpisodesProps {
  selectedShow: number;
}

export interface AppProps {
  shows: ShowListProps[];
}
