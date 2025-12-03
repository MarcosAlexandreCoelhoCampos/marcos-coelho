import enHomeJson from '../json//pt-br/home.json';
import ptHomeJson from '../json/en/home.json';

export interface SiteData {
  Banner: BannerData;
  AboutMe: AboutMeData;
  Knowledges: KnowledgesData;
  Projects: ProjectsData;
  ExperienceAndAcademic: ExperienceAndAcademicData[];
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

export interface KnowledgesData {
  title: string;
  knowledges: string[];
}
export interface ProjectsData {
  title: string;
  projects: ProjectData[];
  SeeMoreButton: SeeMoreData;
}
export interface ProjectData {
  subtitle: string;
  technologies?: string;
  createdForStudy?: boolean;
  text: string;
  link: string;
  image: Image;
  seeMoreMobileActived?: boolean;
}

export interface AcademicExperience {
  info1: string;
  info2: string;
  info3: string;
  info3Mobile?: string;
  texts: string[];
  buttonText?: string;
  buttonLink?: string;
}

export interface ExperienceAndAcademicData {
  title: string;
  titleReverse?: boolean;
  experiences: AcademicExperience[];
}

interface Image {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
}

export interface SeeMoreData {
  textActive: string;
  textDisable: string;
  img: {
    title: string;
  };
}

const siteDataPt: SiteData = enHomeJson as SiteData;
const siteDataEn: SiteData = ptHomeJson as SiteData;

export { siteDataPt };
export { siteDataEn };
