import componentsJson from '../json/components.json';

export interface ComponentsData {
  TitleWithStar: TitleWithStarData;
  CreateCloudsOnRow: CreateCloudsOnRowData;
  CreateStarsOnContainer: CreateStarsOnContainerData;
}

export interface TitleWithStarData {
  image: Image;
}

export interface CreateCloudsOnRowData {
  cloudsSrc: string[];
}

export interface CreateStarsOnContainerData {
  starsSrc: string[];
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
