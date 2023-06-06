export interface INavLink {
  link?: string | null;
  value: string;
}

export interface ISwiperItem {
  title: string;
  subtitle: string;
  image: IImage;
}

export interface IImage {
  src: string;
  width: number;
  height: number;
}

export interface IDataServices extends ISwiperItem {
  idItem: number;
  id: string;
  name: string;
  profession: string;
  description: string;
}

export interface IDataPrices {
  id: number;
  title: string;
  price: number;
  list: string[];
}

export interface ITitleHeader {
  highlightTextOne: string;
  basicText: string;
  highlightTextTwo: string;
}

export interface IDataHomePage {
  titleDocument: string;
  logo: IImage;
  titleHeader: ITitleHeader;
}

export interface IDataAbout {
  id: string;
  title: string;
  description: string;
  icon: IImage;
}
