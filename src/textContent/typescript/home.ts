import homeJson from '../json/home.json';

export interface SiteData {
  Banner: BannerData;
  AboutMe: AboutMeData;
}

export interface BannerData {
  mainTitle: string[];
}

export interface AboutMeData {
  image: Image;
  title: string;
  texts: string[];
  stars: string[];
}

interface Image {
  src: string;
  alt: string;
  title: string;
  width?: number;
  height?: number;
}

const siteData: SiteData = homeJson as SiteData;
export default siteData;
