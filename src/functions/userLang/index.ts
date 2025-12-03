const userLang =
  typeof window !== 'undefined' ? navigator.language.toLowerCase() : 'en';
export default userLang;
