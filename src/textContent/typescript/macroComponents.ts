import macroComponentsJson from '../json/macroComponents.json';

export interface MacroComponentsData {
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

const macroComponentsData: MacroComponentsData =
  macroComponentsJson as MacroComponentsData;
export default macroComponentsData;
