import componentsJson from '../json/components.json';

export interface ComponentsData {
  TitleWithStar: TitleWithStarData;
}

export interface TitleWithStarData {
  image: Image;
}

interface Image {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
}

const componentsData: ComponentsData = componentsJson as ComponentsData;
export default componentsData;
