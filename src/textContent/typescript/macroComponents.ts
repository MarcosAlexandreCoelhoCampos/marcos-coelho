import enMacroComponentsJson from '../json/en/macroComponents.json';
import ptMacroComponentsJson from '../json/pt-br/macroComponents.json';

export interface MacroComponentsData {
  TitleWithStar: TitleWithStarData;
  CreateCloudsOnRow: CreateCloudsOnRowData;
  CreateStarsOnContainer: CreateStarsOnContainerData;
  AirplaneWithText: AirplaneWithTextData;
  Header: HeaderData;
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

export interface HeaderData {
  logo: string;
  cv: string;
  menu: {
    openAlt: string;
    openTitle: string;
    closeAlt: string;
    closeTitle: string;
  };
  nav: {
    about: string;
    knowledges: string;
    projects: string;
    experience: string;
    academic: string;
    contact: string;
  };
}

const enMacroComponentsData: MacroComponentsData =
  enMacroComponentsJson as MacroComponentsData;
const ptMacroComponentsData: MacroComponentsData =
  ptMacroComponentsJson as MacroComponentsData;

export { enMacroComponentsData, ptMacroComponentsData };
