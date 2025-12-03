import enPage404Json from '../json/en/page404.json';
import ptPage404Json from '../json/pt-br/page404.json';

export interface Page404Data {
  Page404Content: Page404ContentData;
}

export interface Page404ContentData {
  title: string;
}

const enPage404: Page404Data = enPage404Json as Page404Data;
const ptPage404: Page404Data = ptPage404Json as Page404Data;

export { ptPage404, enPage404 };
