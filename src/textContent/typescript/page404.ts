import page404Json from '../json/page404.json';

export interface Page404Data {
  Page404Content: Page404ContentData;
}

export interface Page404ContentData {
  title: string;
}

const page404: Page404Data = page404Json as Page404Data;
export default page404;
