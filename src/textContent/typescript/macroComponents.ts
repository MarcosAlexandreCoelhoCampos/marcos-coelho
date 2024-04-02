import componentsJson from '../json/macroComponents.json';

export interface ComponentsData {
  TitleWithStar: TitleWithStarData;
  CreateCloudsOnRow: CreateCloudsOnRowData;
  CreateStarsOnContainer: CreateStarsOnContainerData;
  AirplaneWithText: AirplaneWithTextData;
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

export interface AirplaneWithTextData {
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
