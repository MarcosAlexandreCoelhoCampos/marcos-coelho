import loadingPt from '../json/pt-br/loading.json';
import loadingEn from '../json/en/loading.json';

export interface LoadingData {
  LoadingContent: LoadingContentData;
}

export interface LoadingContentData {
  title: string;
}

const enLoading: LoadingData = loadingEn as LoadingData;
const ptLoading: LoadingData = loadingPt as LoadingData;

export { ptLoading, enLoading };
