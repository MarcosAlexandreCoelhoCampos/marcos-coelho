import homeJson from '../json/home.json';

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
}
export interface ProjectData {
  subtitle: string;
  technologies?: string;
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

const siteData: SiteData = homeJson as SiteData;
export default siteData;
